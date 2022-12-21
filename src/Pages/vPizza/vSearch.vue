<template>
  <form class="inputSearch">

    <img width="40" src="../../components/assets/search.png" alt="search">
    <input type="text" @input="changeData" v-model="searchResult" placeholder="Search...">
    <img v-if="searchData" @click="clearData" class="clearBtn" width="30" src="../../components/assets/X.svg" alt="X">

  </form>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'vSearch',
  data() {
    return {
      searchResult: ''
    }
  },
  computed: {
    ...mapState([
      'searchData'
    ]),
  },
  methods: {
    changeData() {
      this.$store.dispatch('ACT_SET_SEARCH', this.searchResult);
    },
    clearData() {
      this.searchResult = '';
      this.$store.dispatch('ACT_SET_SEARCH', '');
    }

  }
}
</script>

<style lang="scss" scoped>
.inputSearch {
  display: flex;
  width: 180px;

  padding-right: 10px;
  justify-content: end;
  border: 1px solid lightgray;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    width: 300px;

    input {
      width: 240px;
    }
  }


  input {
    width: 120px;
    padding: 5px;
    padding-right: 10px;
    outline: none;
    border: 0;
    transition: all 0.3s ease-in-out;

    &::placeholder {
      padding-left: 5px;
      opacity: 0.5;
    }

    &:focus {
      width: 500px;
      outline: none;
    }

    &:focus .inputSearch {
      width: 300px;
      background-color: red;
    }
  }


}

.clearBtn {
  width: 20px;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }

  &:active {
    transition: all 0.3s ease-in-out;
    transform: scaleY(1px);
  }
}
</style>