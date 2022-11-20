<template>
  <div class="home-page">
    <h1>Home Page</h1>
    <div class="home-container">
      <p class="home-container__descr">What have I done here?<br/> Some functionality for working with the backend, adaptive pages including a burger, etc., CSS3 animation.</p>
      
    </div>
  </div>
</template>

<script>
  export default {
    name:'vHomePage'
  }
</script>

<style lang="scss" scoped>
.home-page{
  display: flex;
  flex-direction: column;
align-items: center;
}
.home-container {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  margin-top: 30px;
  width: 400px;
  height: fit-content;
  font-size: 30px;
  box-shadow:  0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &__descr{
    padding: 10px;
  }
  }
</style>