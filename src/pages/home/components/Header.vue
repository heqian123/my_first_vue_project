<template>
 <div class="header">
    <div class="header-left">
        <span class="iconfont balck_icon">&#xe60a;</span>
    </div>
     <div class="header-input">

        <span class="iconfont seach_icon">&#xe704;</span>
       输入城市/景点/游玩主题</div>
       <router-link to="/city">
        <div class="header-right">
          {{this.city}}
          <span class="iconfont open_icon">&#xe6aa;</span>
        </div>
       </router-link>

  </div>
</template>

<script>
 import { mapState } from 'vuex'
 export default{
  name:'home-header',
  computed: {  //方法1，方法2在list.vue
    ...mapState(['city'])  //mapState是指把vuex里面的数据，映射到我这个组件的数据，映射到computed里面的计算属性中
  }
 }

</script>

<style lang="stylus"    scoped>

@import '../../../assets/styles/varibles.styl'
 .header{
  display:flex;
   line-height:$headerHight;
   color:#fff;
   background:$bgColor;
 }
 .header-left{
   width:0.80rem;
   text-align: center;
 }
 .header-input{
    flex:1;
    margin-top:0.12rem;
    height:0.64rem;
    line-height:0.64rem;
    background:#fff;
    border-radius:0.1rem;
    color:#ccc;
 }
 .header-right{
   min-width:1.04rem;
   text-align: center;
   color :#fff!important;
   padding-left: 0.1rem;
 }
 .seach_icon{
    padding-left:0.1rem;
 }
 .open_icon{
   margin-left:-0.1rem;
 }
</style>
