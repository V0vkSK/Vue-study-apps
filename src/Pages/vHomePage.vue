<template>
  <div class="home-page">
    <h1>Home Page</h1>
    <div class="home-container">
      <p class="home-container__descr">Bootstrap in fact is bullshit. For me.</p>
      <p>for lazy... I can better</p>
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

}
.home-container {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  margin: 20px 5px 15px 300px;
  width: 255px;
  height: fit-content;
  box-shadow:  0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &__descr{
    padding: 10px;
  }
  }
</style>