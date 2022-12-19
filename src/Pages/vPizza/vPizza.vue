<template>
  <div class="cards">
    <vToTop />
    <vCard />

  </div>
</template>

<script>

import vCard from './vCard.vue';
import vToTop from '@/components/vToTop.vue';



export default {
  name: "vPizza",
  components: {
    vCard,
    vToTop,
  },
  mounted() {
    this.$router.currentRoute.value.name === 'pizza' ? this.$store.dispatch('ACT_PIZZA_ACTIVE', false) : null;
    this.$store.dispatch('GET_PIZZAS', '');
    this.$store.dispatch('GET_PIZZAS_IN_CART', '')
  },


}
</script>

<style lang="scss" scoped>
.cards {
  border: 1px solid rgb(238, 233, 233);
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 1100px;
  height: 100%;
}
</style>