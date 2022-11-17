<template>
    <div>
        <router-link class="logo" :to="{name:'home'}">Web<span>VSK</span>Studio</router-link>
    </div>
</template>

<script>
    export default {
        name: 'vLogo'
    }
</script>

<style lang="scss" scoped>
.logo {
  text-decoration: none;
  font-size: 30px;
  display: block;
  color: #7481cf;
  margin-right: 150px;
  padding-left: 15px;
  span{
    color: red;
  }}
</style>