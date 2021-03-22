<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="allPrice">
      合计:¥{{totalPrice}}
    </div>
    <div class="calculate">
      去结算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue'
export default {
  components: {
    CheckButton
  },
  data(){
    return {}
  },
  computed: {
    totalPrice(){
      let price = 0 
      for(var i=0;i<this.$store.state.cartList.length;i++){
        if(this.$store.state.cartList[i].checked){
          price += this.$store.state.cartList[i].price * this.$store.state.cartList[i].count
        }
      }
      return price.toFixed(2)
    },
    checkLength(){
      let count = 0
      for(var i = 0;i<this.$store.state.cartList.length;i++){
        if(this.$store.state.cartList[i].checked){
          count += this.$store.state.cartList[i].count
        }
      }
      return count
    },
    isSelectAll(){
      if(this.$store.state.cartList.length === 0) return false
      let isChecked = false
      for(var i=0;i<this.$store.state.cartList.length;i++){
        if(!this.$store.state.cartList[i].checked){
          return isChecked
        }
      }
      isChecked = true
      return isChecked
    }
  },
  methods: {
   checkClick(){
     if(this.isSelectAll){
        for(var i=0;i<this.$store.state.cartList.length;i++){
          this.$store.state.cartList[i].checked = false
        }
      }else{
        for(var i=0;i<this.$store.state.cartList.length;i++){
          this.$store.state.cartList[i].checked = true
        }
      }
    } 
  }
}
</script>

<style scoped>
  .bottom-bar{
    position: relative;
    display: flex;
    height: 40px;
    line-height: 40px;
  }

  .check-content{
    display: flex;
    align-items: center;
  }

  .check-button{
    line-height: 20px;
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }

  .allPrice{
    margin-left: 20px;
  }

  .calculate{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 110px;
    background-color: orangered;
    color: #fff;
    font-weight: 700;
    text-align: center;
  }
</style>