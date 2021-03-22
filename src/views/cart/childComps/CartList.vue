<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in this.$store.state.cartList" :key="index" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'


export default {
  components: {
    Scroll,
    CartListItem,

  },
  activated () {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cart-list{
    height: 100vh
  }

  .content{
    height: calc(100% - 93px - 40px);
    overflow: hidden;
  }
</style>