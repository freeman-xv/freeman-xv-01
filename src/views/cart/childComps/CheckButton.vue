<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~assets/img/cart/CheckButton.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isChecked:{
      type:Boolean,
      default:true
    }
  }
}
</script>

<style scoped>
  .check-button{
    border-radius:50% ;
    border: 2px solid #aaa;
  }

  .check-button img{
    width: 15px;
  }

  .check{
    background-color: #ffc0cb;
    border-color: #ffc0cb;
  }
</style>