<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartCount}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar class="bottom-bar"></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'


export default {
  data(){
    return{

    }
  },
  computed: {
    cartCount(){
      let count = 0
      for(var i=0;i<this.$store.state.cartList.length;i++){
        count += this.$store.state.cartList[i].count
      }
      return count
    }
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar
  }
}
</script>

<style scoped>
    .cart{
      padding-top: 43px;
    }
    .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
  }

  .bottom-bar{
    background-color: #fff;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    z-index: 555;
  }
</style>