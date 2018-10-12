<template>
  <transition>
    <slot></slot>

  </transition>


</template>

<script>
// 动画插件，渐隐渐现效果
import axios from 'axios'
 export default{  // name:'Detail',的作用，1做递归组件的时候用到，2某个页面取消缓存的时候，3，调试的时候会看到组件名字
  name:'Fade',

 }


</script>
<style lang = "stylus" scoped>
 .v-enter, .v-leave-to
  opacity :0
 .v-enter-active, .v-leave-active
  transition : opacity 0.5s
  

</style>