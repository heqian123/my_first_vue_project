<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title">当前城市</div>
                <ul class="listCity">
                    <!-- <li class="itemCity select">{{this.$store.state.city}}</li> 方法3 -->  
                     <li class="itemCity select">{{this.currentCity}}</li>
                </ul>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <ul class="listCity">
                    <li class="itemCity" v-for="item of hotCitiesList" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                  
                </ul>
            </div>
            <div class="allCity">
                <!-- key指ABCD -->
                <div class="aitem" v-for="(item,key) of cities" :key="key" :ref="key"> 
                    <div class="title">{{key}}</div>
                    <ul class="allCity_list">
                       <li class="allCity_item" v-for="innderItem of item" :key="innderItem.id" @click="handleCityClick(innderItem.name)">
                            <span class="city_name">{{innderItem.name}}</span>
                       </li>
                    </ul>
                </div>
     
        
            </div>
                
         </div>
    </div> 
</template>
<script>
import Bscroll from "better-scroll";
import { mapState } from 'vuex'
export default {
  name: "CityList",
  props: {
    hotCitiesList: Array,
    cities: Object,
    letter:String
  },
  computed: {
   ...mapState({   //方法2 。方法1在header.vue
       currentCity:'city'
    })
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
    console.log(this.scroll);
    console.log(this.$refs.wrapper);
  },
  methods: {
      handleCityClick (city) {  //选择城市

    //    this.$store.('changeCity',city);  //方法1：通过调用dispatch，触发changeCity的Actions  ，city参数 ，这样是还没效果的，需要有一个actions，在index页面
        this.$store.commit('changeCitymu',city);  //方法2：直接通过commit调用
       console.log(city);
       this.$router.push('/');
      }
  },
  watch:{  //监听letter变化
   letter () {
       if(this.letter){
           const element = this.$refs[this.letter][0];
           console.log(element);
           this.scroll.scrollToElement(element);//scroll的方法

       }
       console.log(this.letter);
   }

  }

};
</script>
<style lang = "stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.title {
    line-height: 0.6rem;
    background: #f3f3f3;
    padding-left: 0.2rem;
    color: #666;
}

.listCity {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0.4rem 0.2rem 0.2rem;
}

.itemCity {
    width: 30.33%;
    border: 1px solid #ccc;
    text-align: center;
    padding: 0.1rem 0;
    margin-right: 0.1rem;
    margin-top: 0.2rem;
    border-radius: 5px;
}

.select {
    color: #0093de;
    border: 1px solid #0093de;
}

.allCity {
    .allCity_list {
        .allCity_item {
            line-height: 0.8rem;
            border-bottom: 1px solid #e0e0e0;

            .city_name {
                margin-left: 0.2rem;
            }
        }
    }
}

.list {
    position: absolute;
    top: 1.7rem;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
}
</style>