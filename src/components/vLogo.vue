<template>
  <div class="logo-block">
    <router-link class="logo" :to="{ name: 'about' }">Web<span>VSK</span>Studio</router-link>
  </div>
</template>

<script>
export default {
  name: 'vLogo'
}
</script>

<style lang="scss" scoped>
// .logo {

//   text-decoration: none;
//   font-size: 1rem;
//   display: flex;
//   color: #7481cf;
//   margin-right: 150px;
//   padding-left: 15px;

//   span {
//     color: red;
//   }
// }

.logo-block {
  display: flex;
  align-items: center;
  margin-right: 150px;

  .logo {
    text-decoration: none;
    font-size: 1.5rem;
    color: #7481cf;
    text-shadow: 1px 1px 20px rgb(0, 94, 255);

    span {
      color: red;
      text-shadow: 1px 1px 10px red;
      text-shadow: white 1px 0 10px;
    }
  }
}
</style>