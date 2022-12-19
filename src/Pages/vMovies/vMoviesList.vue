<template >
  <ul class="movies-container">
    <vMovieItem />
  </ul>
  <!-- <p>{{this.ans}}</p> -->
  <!-- <a href="#" class="btn-link" :class="{ active: this.isScroll }">Up</a> -->
  <vToTop />
</template>

<script>
import { mapState } from 'vuex';
import vMovieItem from './vMovieItem.vue'
import vToTop from '@/components/vToTop.vue';



export default {
  name: 'vMoviesList',
  components: {
    vMovieItem,
    vToTop
  },
  computed: {
    ...mapState([
      'movies',
      'isActiveTopButton',
    ]),
  },
}

</script>

<style lang="scss" scoped>
li {
  list-style: none;
}

.movies-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

}

@media(max-width:855px) {
  .movies-container {
    justify-content: center;
  }
}
</style>