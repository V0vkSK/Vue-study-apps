<template>

  <a href="#" class="btnToTop" :class="{ active: this.isScroll }">Up</a>

</template>

<script>
export default {
  name: 'vToTop',
  data() {
    return {
      isScroll: false
    }
  },
  methods: {
    activeSc() {
      if (document.documentElement.scrollTop > 1) {
        this.isScroll = true
      } else { this.isScroll = false }

    },
  },
  mounted() {
    window.addEventListener('scroll', this.activeSc)
  },

}
</script>

<style lang="scss" scoped>
.btnToTop {
  display: none
}

@media (min-width:1800px) {
  .btnToTop {
    cursor: pointer;
    position: fixed;
    bottom: 100px;
    right: 300px;
    display: block;
    text-decoration: none;
    padding: 10px 20px;
    border: none;
    border-radius: 5%;
    background-color: #2071ce;
    color: #fff;
    box-shadow: 1px 2px 10px 5px rgba(23, 22, 22, 0.615);
    transition: all 0.3s ease-in-out;
    opacity: 0;

    &:hover {
      background: #333;
      color: rgb(64, 205, 252);
    }

    &:active {
      background: #555;
      color: rgb(64, 205, 252);
    }
  }

  .active {
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }
}
</style>