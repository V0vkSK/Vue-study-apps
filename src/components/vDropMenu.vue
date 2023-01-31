<template>
  <div class="drop-container" v-if="isVisible">
    <router-link class="link" :to="{ name: 'movies' }" @click="dropMenuClose">Movies</router-link>
    <router-link class="link" :to="{ name: 'authors' }" @click="dropMenuClose">Authors</router-link>
    <router-link class="link" :to="{ name: 'search' }" @click="dropMenuClose">Search</router-link>


  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  name: 'vDropMenu',

  data() {
    return {
    }
  },

  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    dropMenuClose() {
      return this.$emit('isvisible', '');
    },
    ...mapGetters([
      'AUTHORS'
    ])
  },
  mounted() {

    this.$store.dispatch('GET_MOVIES')
    this.$store.dispatch('GET_AUTHOR')
  }

}
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  display: flex;
  width: 150px;
  padding: 15px;
  margin-bottom: 5px;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
  background-color: #2071ce;
  color: #fff;

  &:hover,
  &:focus {
    background: #0a144e;
    color: rgb(0, 191, 255);
  }
}

.drop-container {
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 150px;
  background-color: none;
  border: 0;
  border-radius: 5px;
  margin-top: 10px;
}
</style>