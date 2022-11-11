<template>
  <div>
    <iframe class="frame" src="https://vovkcv.netlify.app" scrolling="no"/>
    
  </div>
</template>

<script>
  export default {
    name: "cCV"
  }
</script>

<style lang="scss" scoped>
div{
  position: relative;
  width: 1100px;
  height: 1035px;
}
.frame{
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  border:0;
  // padding-bottom: 50px;
}
</style>