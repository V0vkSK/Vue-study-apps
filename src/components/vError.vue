<template>
  <div>
    <h1>Error</h1>
    <p class="container">No author for your request</p>
    <RouterLink class="home" :to="{ name: 'home' }">Home</RouterLink>
  </div>
</template>

<script>
export default {
  name: 'vError'
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: center;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.home {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-decoration: none;
  color: rgb(31, 42, 192);
}
</style>