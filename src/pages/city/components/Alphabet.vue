<template>
    <ul class="list">
      <li class="item" v-for="item of letters" :key="item" @click="handelLetterClick" @touchstart.prevent="handleTouchStart"
       @touchmove="handleTouchMove" @touchend="handleTouchEnd" :ref="item">{{item}}</li>
    </ul> 
</template>
<script>
 export default {
     name:'CityAlphabet',
     props:{
         cities:Object
     },
     data () {
       return {
           istouchStart:false,
           startY:0,
           timer:null  //当鼠标在右侧abc移动的时候，执行的频率是非常高的，通过节流，限制函数执行的频率
       }
     },
     updated () {  //当页面的数据被更新的时候，同时页面完成自己的渲染之后
      this.startY = this.$refs['A'][0].offsetTop;
     },
     computed:{
         letters () {    //构建一个名字为letters的计算属性
             const letters = [];
             for(let i in this.cities){
                 letters.push(i);
             }
             return letters;    //['A','B','C'.....]
         }
    
     },
     methods: {
         handelLetterClick (e) {
             this.$emit('change',e.target.innerText); //点击后让list组件到对应城市，就要通过$emit事件向父组件传递数据，然后父组件再传给list组件
             console.log(e.target.innerText);

         },
         handleTouchStart (e) {
             this.istouchStart = true;

         },
         handleTouchMove (e) {
           if(this.istouchStart){  //当在页面上下滑动的时候，现在所以的位置是哪个字母，获得A的字母距离顶部的高度。滑动的时候，看下当前手指位置距离顶部的高度在，做一个差值，算出当前手指位置和当前字母A顶部的差值，除以每个字母的高度，就可以知道，当前是第几个字母，然后取对应的字母，触发一个change事件给外部
               if(this.timer){  //如果存在，就清除
                 clearTimeout(this.timer);
               }
               this.timer = setTimeout(() =>{
                // const startY = this.$refs['A'][0].offsetTop;  //A距离顶部的距离
                    const touchY = e.touches[0].clientY - 84; //手指的位置距离最顶部的位置，屏幕顶部,    距离绿色导航的底部距离就- 84
                    const index = Math.floor((touchY - this.startY)/ 22);  //字母的下标， 22是每个字母的高度
                    if(index >= 0 && index < this.letters.length){
                    this.$emit ('change',this.letters[index]);  
                    }
                    console.log(index);
               },16)

           }

         },
         handleTouchEnd () {
             this.istouchStart = false;
         }
     }

 }
</script>
<style lang = "stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.list
    display :flex;
    flex-direction: column;
    justify-content :center;
    position :absolute;
    right :0;
    top:1.7rem;
    bottom :0;
    width :0.4rem;

  .item
   text-align:center;
   line-height:0.45rem;
   color :$bgColor;
</style>