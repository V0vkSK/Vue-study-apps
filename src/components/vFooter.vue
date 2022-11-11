<template>
  <div>
    <footer class="footer">
      <div class="footer-container">
        <vLogo/>
      </div>
    </footer>

  </div>
</template>

<script>
import vLogo from './vLogo.vue'
  export default {
  name: 'vFooter',
  components: {
      vLogo
    }
  }
</script>

<style lang="scss" scoped>
.footer {
  z-index: 7;
  display: flex;
  width: 100%;
  min-height: 70px;
  background-color: #c9d7e4;
  }

.footer-container {
  display: flex;
  width: 1100px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
}
</style>