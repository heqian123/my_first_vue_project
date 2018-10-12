import Vue from 'vue'
import Vuex from 'vuex'
import States from './state'
import Mutations from './mutations'
Vue.use(Vuex)   //vue使用插件的方法



export default new Vuex.Store({//创建store仓库
    state : {  //放全局公用的数据
     city:States.city
    },
    // actions: {  方法1
    //     changeCity (ctx,city) {  //方法名字和list.vue里面，调用dispatch时候，触发的actions名字一样,ctx指上下文，city传过来的参数
    //         ctx.commit('changeCitymu',city); //通过commit方法，执行changeCitymu的mutations
    //         console.log(city);
    //     }
    // },
    mutations: Mutations   //actions接收到传递过来的城市city，需要通过调用mutations改变公用的数据

     

}) 