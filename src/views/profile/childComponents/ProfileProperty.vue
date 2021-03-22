<template>
  <div class="profile-property">
    <div class="money">
      <span class="big">0.00</span>元
      <span class="small">我的余额</span>
    </div>
    <div class="discounts">
      <span class="big">0</span>个
      <span class="small">我的优惠</span>
    </div>
    <div class="integral">
      <span class="big">0</span>分
      <span class="small">我的积分</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .profile-property{
    display: flex;
    font-size: 15px;
    text-align: center;
    border-bottom: 10px solid #eee;
  }

  .money{
    flex: 1;
    border-right: 1px #eee solid;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .discounts{
    flex: 1;
    border-right: 1px #eee solid;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .integral{
    flex:1;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .big{
    font-size: 18px;
    color: orangered;
    font-weight: 700;
  }
  
  .small{
    font-size: 12px;
    display: block;
  }
</style>