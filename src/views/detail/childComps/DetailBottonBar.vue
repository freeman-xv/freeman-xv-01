<template>
  <div class="botton-bar">
    <div class="bar-item bar-left">
      <div>
        <img src="~assets/img/detail/service.png" alt="" class="icon service">
        <span class="text">客服</span>
      </div>
      <div>
        <img src="~assets/img/detail/store.png" alt="" class="icon service">
        <span class="text">店铺</span>
      </div>
      <div>
        <img src="~assets/img/detail/collection-fill.png" alt="" class="icon service">
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    addToCart(){
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
  .botton-bar{
    height: 49px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    text-align: center;
  }

  .bar-item{
    flex: 1;
    display: flex;
  }

  .bar-item>div{
    flex: 1;
  }

  .bar-left .text{
    font-size: 13px;
  }

  .bar-left .icon{
    display: block;
    width: 25px;
    margin: 5px auto 0px;
  }


  .bar-right{
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bar-right .cart{
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy{
    background-color: #f69;
  }
</style>