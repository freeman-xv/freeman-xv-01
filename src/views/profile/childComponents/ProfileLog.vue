<template>
  <div class="profile-log">
    <div class="head-photo">
      <img src="~assets/img/profile/profile.svg" alt="">
    </div>
    <div class="other">
      <div class="log">登陆/注册</div>
      <div class="telphone">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="more">
      <img src="~assets/img/profile/right.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .profile-log{
    width: 100%;
    background-color: var(--color-tint);
    height: 70px;
  }
  .head-photo{
    width: 50px;
    height: 50px;
    background-color: #eee;
    border-radius: 50%;
    border: 2px #ccc solid;
    float: left;
    margin: 10px  15px ;
  }
  .head-photo img{
    width: 45px;
  }

  .other{
    float: left;
    padding-top: 15px;
    width: 150px;
  }

  .other .log{
    color: #fff;
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 3px;
  }

  .other .telphone{
    color: #fff;
    font-size: 10px;
  }
  .other img{
    width: 17px;
    vertical-align: bottom;
  }

  .more{
    float: right;
    height: 100%;
  }

  .more img{
    margin:20px 10px;
    width: 20px;
  }
</style>