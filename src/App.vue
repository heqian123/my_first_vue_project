<template>
  <div id="app">
    <!-- keep-alive做了缓存, exclude的意思是，除了exclude制定的页面，Detail页面，不做缓存，其他的会做缓存-->
    <keep-alive exclude="Detail">  
      <router-view/>

    </keep-alive>
   

  </div>
</template>

<script>
// //我的路由的内容被加载一次之后，从内存调数据，不发请求keep-alive
export default {
  name: 'App'
}
</script>

<style>

</style>
