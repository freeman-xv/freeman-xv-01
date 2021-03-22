<template>
  <div class="profile-options">
    <div>
      <img src="~assets/img/profile/message.svg" alt="">
      <span>我的消息</span>
    </div>
    <div>
      <img src="~assets/img/profile/integral.svg" alt="">
      <span>我的消息</span>
    </div>
    <div>
      <img src="~assets/img/profile/VIP.svg" alt="">
      <span>我的消息</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .profile-options{
    font-size: 15px;
    border-bottom: 10px solid #eee;
  }

  .profile-options div{
    border-bottom: 1px solid #eee;
    padding: 5px 0;
  }
  img{
    width: 20px;
    vertical-align: middle;
    margin: 5px;
  }
</style>