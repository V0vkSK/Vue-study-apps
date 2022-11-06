<template>
  <ul class="authors-container">
    <vAuthorItem/>
  </ul>
  </template>

<script>
import { mapState } from 'vuex';
import vAuthorItem from './vAuthorItem.vue'

export default {
  name: 'vAuthorsList',
  components: {
    vAuthorItem
  },
  
  computed: {
    ...mapState([
      'movies',
      'authors' 
    ]),
            // method Set with Massive of Object
    // uniqueAuthor() {
    //   let arr = this.movies
    //   const unique = [...new Set(arr.map(item => item.byline))];
    //   return unique
    // }
  },
  methods: {
    // setName(author) {
    //   localStorage.name = author
    // }
  },
  
}
  
</script>

<style lang="scss" scoped>
li{
  list-style: none;
}
.authors-container{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  
}
.btn-link{
  position: fixed;
  bottom: 30px;
  right: 250px;
  display: block;
  text-decoration: none;
  padding: 10px 20px;
  border: none;
  border-radius: 5%;
  background-color: #13b00b;
  color: #fff;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}


</style>