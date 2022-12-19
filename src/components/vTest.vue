<template>
  <div>
    <h1>{{ answer }}</h1>
  </div>
</template>

<script>


export default {
  name: 'vTest',
  computed: {
    answer() {
      const apple = 'Apple'
      const One = 'One'
      return apple + One
    }
  },




}

</script>

<style lang="scss" scoped>

</style>