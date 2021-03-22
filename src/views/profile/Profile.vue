<template>
  <div class="profile">
    <nav-bar class="nav-bar"><div slot="center">我的档案</div></nav-bar>
    <profile-log></profile-log>
    <profile-property></profile-property>
    <profile-options></profile-options>
    <profile-else></profile-else>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import ProfileLog from './childComponents/ProfileLog'
import ProfileProperty from './childComponents/ProfileProperty.vue'
import ProfileOptions from './childComponents/ProfileOptions.vue'
import ProfileElse from './childComponents/ProfileElse.vue'
export default {
  components: {
    NavBar,
    ProfileLog,
    ProfileProperty,
    ProfileOptions,
    ProfileElse
  }
}
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-size: 16px;
  }
</style>