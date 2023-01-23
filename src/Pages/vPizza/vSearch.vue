<template>
  <form
    class="inputSearch">

    <img width="40"
      src="../../components/assets/search.png"
      alt="search">
    <input
      type="text"
      @input="changeData"
      v-model="searchResult"
      placeholder="Search...">
    <img
      v-if="searchData"
      @click="clearData"
      class="clearBtn"
      width="30"
      src="../../components/assets/X.svg"
      alt="X">

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
  width: 240px;
  margin-right: 10px;
  padding-right: 15px;
  justify-content: end;
  outline: 1px solid lightgray;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  input {
    width: 160px;
    padding: 5px;
    padding-right: 10px;
    outline: none;
    border: 0;

    &::placeholder {
      padding-left: 5px;
      opacity: 0.5;
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