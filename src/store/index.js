import Vue from 'vue'
import Vuex from 'vuex'


// 1.安装插件
Vue.use(Vuex)

// 2.创建Store的对象
const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    addCart(state,payload){
      // let oldProduct = null
      // for(let item of state.cartList){
      //   if(item.iid === payload.iid){
      //     oldProduct = item
      //   }
      // }
      payload.checked = false
      let oldProduct = state.cartList.find(item => item.iid === payload.iid)
      if(oldProduct){
        oldProduct.count += 1
      }else{
        payload.count = 1
        state.cartList.push(payload)
      }
    }
  }
})

// 3.挂载Vue实例上
export default store