<template>
  <div>
    <h1 class="author">Author: {{nameAuthor}}</h1>
    <div class="reviews-container">
      <h2 class="reviews">Reviews:</h2>
      <ul class="review">
        <li class="review__item" v-for="movie in movies.filter(el => el.byline == this.nameAuthor)" :key="movie.index">
          <a :href="movie.link.url" target="_blank" class="review__title">{{movie.display_title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'vReviews',
  data() {
    return {
      nameAuthor : localStorage.name
    }
  },
  computed: {
    ...mapState([
      'movies'
    ]),
    uniqueAuthor() {
      let arr =  this.movies 
      // const unique = [...new Set(arr.map(item => item.byline))];
      const reviews = arr.filter(el => el.byline === this.nameAuthor)
      return reviews
      // return unique
    },
  }
  }
</script>

<style lang="scss" scoped>
.author {
  margin-bottom: 20px;
}
.reviews-container{
  display: flex;
  flex-direction: column;
  width: 700px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.reviews {
  margin-bottom: 10px;
}
 
      
.review {
  display: flex;
  flex-direction: column;
		&__item {
		}

		&__title {
      color: #13b00b;
    text-decoration: none;
    margin-left: 40px;
      &:hover, &:focus{
        color: rgb(0,191,255);
        text-decoration: none;}
    }
}


</style>