<template>
   <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCitiesList="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>
<script>
 import CityHeader from './components/Header'
 import CitySearch from './components/Search'
 import CityList from './components/List'
 import CityAlphabet from './components/Alphabet'
 import axios from 'axios'
 export default {
     name: 'City',
     components: {
         CityHeader,
         CitySearch,
         CityList,
         CityAlphabet
     },
     data () {
         return {
             cities:{},
             hotCities:[],
             letter:''
         }

     },
     methods: {
         getCityInfo () {
             axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
         },
         handleGetCityInfoSucc (res) {
             console.info(res);
             res = res.data;
             if(res.ret && res.data){
                 const data = res.data;
                 this.cities = data.cities;
                 this.hotCities = data.hotCities;

             }
         },
         handleLetterChange (letter) {
             this.letter = letter; // 子组件alphabet，传出来的点击哪个字母的数据，然后在传给list组件
            console.log(letter);
         }

     },
     mounted () {
         this.getCityInfo();
 
     }
 }
</script>
<style lang = "stylus" scoped>

</style>