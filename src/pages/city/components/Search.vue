<template>
   <div>
    <div class="search">
      <input class="search_input"  v-model="keyWord" placeholder="请输入城市或拼音"/>
    </div> 
    <div class="search_content" ref="search" v-show="keyWord">
         <ul>
             <li class="city_name" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
              <li class="city_name" v-show="hasNoData">没有找到匹配数据</li>
         </ul>


    </div>

   </div>
 
</template>
<script>
import Bscroll from "better-scroll";
 export default {
     name: 'CitySearch',
     props: {
         cities:Object
     },
     data () {
         return {
             keyWord:'',
             list:[],
             timer:null
         }
     },
    mounted() {
        this.scroll = new Bscroll(this.$refs.search);
     },
    methods: {
      handleCityClick (city) {  //选择城市
        this.$store.commit('changeCitymu',city);  //方法2：直接通过commit调用
        this.$router.push('/');
      }
  },
    computed: {  //计算属性
      hasNoData () {
          return !this.list.length
      }

     },
     watch: {  //监听
  
      keyWord () {
           var _this = this;
          if(_this.timer){
              clearTimeout(_this.timer);
          }
          if(!this.keyWord){
              this.list = [];
              return;
          }
          _this.timer = setTimeout(() => {
              const result = [];
              for(let i in this.cities){
                this.cities[i].forEach((value) => {
                    if(value.spell.indexOf(_this.keyWord) > -1 ||  value.name.indexOf(_this.keyWord) > -1){
                        result.push(value);
                    }
                });

              }
              _this.list = result;
          },100)
      }

     }
 }
</script>
<style lang = "stylus" scoped>
@import '../../../assets/styles/varibles.styl'
 .search
  height :0.82rem;
  padding :0 0.2rem;
  background $bgColor
 .search_input
  box-sizing:border-box;
  width :100%;
  line-height :0.62rem;
  height :0.62rem;
  padding:0 0.2rem;
  text-align: center;
  color :#666;
.search_content
  z-index: 1;
  overflow :hidden;
  position :absolute;
  top:1.68rem;
  left :0;
  right :0;
  bottom :0;
  background :#fff;
  .city_name
    line-height: 0.8rem;
    border-bottom: 1px solid #e0e0e0;
    padding-left :0.2rem;
 
</style>