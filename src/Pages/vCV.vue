<template>
  <div>
    <iframe id="myFrame" class="frame" src="https://vovkcv.netlify.app" width="1100" height="1200" scrolling="no"/>
    
  </div>
</template>

<script>
window.onload = function () {
  let frameElement = document.getElementById('myFrame');
  let doc = frameElement.contentDocument;
  doc.body.innerHTML = doc.body.innerHTML + '<style>.container { width: 45 %; }</style>'
  }
  export default {
    name: "cCV"
  }
</script>

<style lang="scss" scoped>
div{
  position: relative;
  width: 1100px;
  height: 1200px;
}

.frame{
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
  border:0;
  // padding-bottom: 50px;
}
@media(max-width:400px){
  .frame{
  transform: scale(0.35);
  transform-origin: 0 0 ;
}
}
@media(max-width:1100px){
  .frame{
  transform: scale(0.9);
  transform-origin: 0 0 ;
}
}
@media(max-width:960px){
  .frame{
  transform: scale(0.7);
  transform-origin: 0 0 ;
}
}
@media(max-width:756px){
  .frame{
  transform: scale(0.5);
  transform-origin: 0 0 ;
}
}
@media(max-width:550px){
  .frame{
  transform: scale(0.4);
  transform-origin: 0 0 ;
}
}
</style>