<template>
   <ul class="authors-container">
      <li class="author-container" v-for="movie in uniqueAuthor" :key="movie">
      <router-link :to="{name:'reviews'}" class="author-container__link" @click="setName(movie)">
        <h2 class="author-container__title">{{movie}}</h2>
      </router-link>
      </li>
   </ul>
  </template>

<script>
import { mapState } from 'vuex';
// import vAuthorItem from './vAuthorItem.vue'

export default {
  name: 'vAuthorsList',
  components: {
    // vAuthorItem
  },
  
  computed: {
    ...mapState([
      'movies',
      // 'authors' 
    ]),
  //           // method Set with Massive of Object
    uniqueAuthor() {
      let arr = this.movies
      const unique = [...new Set(arr.map(item => item.byline))];
      return unique
    }
  },
  methods: {
    setName(author) {
      localStorage.name = author
    }
  },
  
}
  
</script>

<style lang="scss" scoped>
.authors-container{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  
}
@media(max-width:855px){
  .authors-container{
    justify-content: center;
  }
}
.author-container {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  margin: 0 5px 15px 15px;
  width: 255px;
  box-shadow:  0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &__link{
      display: flex;
      justify-content: center;
      text-decoration: none;
    }
		&__title {
      color: rgb(96, 95, 95);
      font-size: 25px;
      margin-bottom: 5px;

        &:hover, &:focus{
        color:rgb(0, 191, 255)
    }
		}

		&__img {
      margin-bottom: 5px;
      width: 100%;
		}

		&__description {
      margin-bottom: 5px;
		}
    &__author{
      // position: absolute;
      // bottom: 5px;
      // left: 10px;
      margin-top: 5px;
      display: flex;
      justify-content: center;
      font-size: 20px;
      color: green;
      &:hover, &:focus{
        color: lightgreen;
      }
    }
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