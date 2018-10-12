export default ({
    changeCitymu (state,city){   //changeCity任意写
        state.city = city; //state是公用里面的数据，等于传进来的city
        try{
          localStorage.city = city;  //缓存选择的城市，解决选择了，刷新情况下，是选择后的城市
        }catch (e) {}
       
      }   

    
})