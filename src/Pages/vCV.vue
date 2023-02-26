<template>
  <div>
    <iframe id="myFrame" class="frame" src="https://vsk-cv.onrender.com" width="1100" height="1500"
      scrolling="no" />
    <vToTop />
  </div>
</template>

<script>
import vToTop from '@/components/vToTop.vue';
export default {
  name: "cCV",
  components: {
    vToTop
  }
}
</script>

<style lang="scss" scoped>
div {
  position: relative;
  width: 1100px;
  height: 1500px;
}

.frame {
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
  border: 0;
  // padding-bottom: 50px;
}

@media(max-width:1100px) {
  .frame {
    transform: scale(0.9);
    transform-origin: 0 0;
  }
}

@media(max-width:960px) {
  .frame {
    transform: scale(0.7);
    transform-origin: 0 0;
  }
}

@media(max-width:756px) {
  .frame {
    transform: scale(0.5);
    transform-origin: 0 0;
  }
}

@media(max-width:550px) {
  .frame {
    transform: scale(0.4);
    transform-origin: 0 0;
  }
}

@media(max-width:400px) {
  .frame {
    transform: scale(0.35);
    transform-origin: 0 0;
  }
}
</style>