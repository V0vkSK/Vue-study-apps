<template>
  
      <li class="movie-container" v-for="movie in movies" :key="movie">
      <a class="movie-container__link" :href="movie.link.url" target="_blank">
        <h2 class="movie-container__title">{{movie.display_title}}</h2>
        <img class="movie-container__img" :src="movie.multimedia.src" :alt="movie.display_title">
        <p class="movie-container__description">{{movie.summary_short}}</p>
        <p class="movie-container-shadow"></p>
      </a>
      <router-link :to="{name:'reviews'}" class="movie-container__author" @click="setName(movie)">Author: {{movie.byline}}</router-link>
      </li>
  
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'vMovieItem',
  computed: {
    ...mapState([
      'movies'
    ])
  },
  methods: {
    setName(movie) {
      localStorage.name = movie.byline
      
    },
  }
}
</script>

<style lang="scss" scoped>
.movie-container {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  margin: 0 5px 15px 15px;
  width: 255px;
  box-shadow:  0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &__link{
       position: relative;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: rgb(69, 67, 67);
    
     &:hover .movie-container-shadow,
      &:focus .movie-container-shadow{
     transform: scale(1);
     opacity: 0.3;
     cursor: pointer;
    }}

		&__title {
      margin-bottom: 5px;
      align-items: center;
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
     .movie-container-shadow{
        position: absolute;
        top: 0;
        left: 0;
        
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
        margin: 0;
        padding: 20px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 400;
        font-size: 13px;
        line-height: 1.4;
        color: #fff;

        background-color: lightgray;

        opacity: 0;
        transform: scale(0.3);
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 100ms;
  }

</style>