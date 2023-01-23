<template>
  <div>
    <vHeader
      class="header"
      v-if="!isPizzaActive" />
    <vMenu
      class="header"
      v-if="isPizzaActive" />
    <main>
      <vContent />
    </main>
    <vFooter />
  </div>
</template>

<script>
// Check mobile or PC---------------

import MobileDetect from 'mobile-detect';
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile() != null;

if (isMobile) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}

//-----------------------------------

import vHeader from './components/vHeader.vue';
import vMenu from './Pages/vPizza/vMenu.vue';
import vContent from './components/vContent.vue';
import vFooter from './components/vFooter.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    vHeader,
    vContent,
    vFooter,
    vMenu
  },
  computed: {
    ...mapState([
      'isPizzaActive',
      'pizzasInCart'
    ])
  },
  methods: {

  },
  mounted() {
    
    this.$store.dispatch('GET_PIZZAS', '');
    this.$store.dispatch('GET_PIZZAS_IN_CART', '')
    localStorage.total = 0
  }
}
</script>
<style>
#app {
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  color: #2c3e50;
  margin: 0;
}

html,
body {
  font-family: Open Sans;
  height: 100%;
  box-sizing: border-box;
  line-height: 1;

}

body._lock {

  overflow-y: hidden;
}

main {
  min-height: 81vh;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

router-link {
  text-decoration: none;
}

.header {
  /* position: fixed; */
}
</style>
