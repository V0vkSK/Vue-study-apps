<template>
  <form class="inputSearch" @submit="submitData">
    <input type="text" v-model="searchResult" placeholder="Input you search">
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
    submitData() {
      this.$store.dispatch('SET_SEARCH', this.searchResult);
    }

  }
}
</script>

<style lang="scss" scoped>
.inputSearch {
  display: flex;
  width: 300px;
  justify-content: end;

  input {
    width: 120px;
    padding: 5px;
    margin-right: 0;
    border-radius: 10px;
    border: 0;
    transition: all 0.3s ease-in-out;
    box-shadow: 3px 3px 5px 1px grey;

    &::placeholder {
      padding-left: 5px;
      opacity: 0.5;
    }

    &:focus {
      width: 300px;
      border: 0;
    }

    &:hover {
      width: 300px;
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>