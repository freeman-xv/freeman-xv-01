<template>
    <tab-bar>
    <tab-bar-item path="/home" activeColor="pink">
      <img src="@/assets/img/tabbar/all.png" alt="" slot="item-icon">
      <img src="@/assets/img/tabbar/all(1).png" alt="" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="category" activeColor="pink">
      <img src="@/assets/img/tabbar/Viewlist.png" alt="" slot="item-icon">
      <img src="@/assets/img/tabbar/Viewlist(1).png" alt="" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="cart" activeColor="pink">
      <img src="@/assets/img/tabbar/cart.png" alt="" slot="item-icon">
      <img src="@/assets/img/tabbar/cart(1).png" alt="" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="profile" activeColor="pink">
      <img src="@/assets/img/tabbar/account.png" alt="" slot="item-icon">
      <img src="@/assets/img/tabbar/account(1).png" alt="" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  
</style>