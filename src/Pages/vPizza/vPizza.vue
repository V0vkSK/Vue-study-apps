<template>
  <div>

    <div class="container-search">
      <h1 v-if="!searchData">All Pizzas</h1>
      <h1 v-if="searchData">Searching of: {{ searchData }}</h1>
      <vSearch />
    </div>

    <vToTop />

    <ul class="cards">
      <vCard />
    </ul>

  </div>
</template>

<script>

import vCard from './vCard.vue';
import vToTop from '@/components/vToTop.vue';
import vSearch from './vSearch.vue';
import { mapState } from 'vuex';



export default {
  name: "vPizza",
  components: {
    vCard,
    vToTop,
    vSearch,
  },

  computed: {
    ...mapState([
      'searchData',
      'pizzas',
      'pizzasInCart'
    ])
  },
  mounted() {
    console.log('mounted');
    // this.$router.currentRoute.value.name === 'pizza' ? this.$store.dispatch('ACT_PIZZA_ACTIVE', false) : null;

    // Count total
    const tot = this.pizzasInCart.reduce((acc, item) => { return acc + item.qty * item.price }, 0);
    this.$store.dispatch('ACT_SET_TOTAL', tot)
    localStorage.total = tot                              //push to localStorage

    // Switch menu
    this.$store.dispatch('ACT_PIZZA_ACTIVE', false)

    // Load pizzas
    if (!this.pizzas) {
      this.$store.dispatch('GET_PIZZAS', '').then
      this.$store.dispatch('GET_PIZZAS_IN_CART', '').then
    }
  },

}
</script>

<style lang="scss" scoped>
.container-search {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cards {
  border: 1px solid rgb(238, 233, 233);
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 1100px;
  height: 100%;
  margin-top: 30px;
}
</style>