<template>
  
      <li class="author-container" v-for="author in authors" :key="author.index">
      <router-link :to="{name:'reviews'}" class="author-container__link" @click="setName(author)">
        <h2 class="author-container__title">{{author.display_name}}</h2>
      </router-link>
      </li>
  
</template>

<script>
import { mapState } from 'vuex';

  export default {
  name: 'vAuthorsItem',
  computed: {
    ...mapState([
        'authors'
      ])
    },
  methods: {
    setName(author) {
      localStorage.name = author.display_name
      console.log(author.display_name);
      
    }
  } 
  }
</script>

<style lang="scss" scoped>
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
     .author-container-shadow{
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