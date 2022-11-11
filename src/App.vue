<template>
      <div>
        <vHeader class="header"/>  
        <main>
        <vContent/>
        </main> 
        <vFooter/>
      </div>
</template>

<script>

import vHeader from './components/vHeader.vue';
import vContent from './components/vContent.vue';
import vFooter from './components/vFooter.vue';

export default {
  name: 'App',
  components: {
    vHeader,
    vContent,
    vFooter
 },
}
</script>
  <!-- @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic); -->
<style> 
#app {
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  color: #2c3e50;
  margin: 0;
}
html{
  min-height: 100vh;
  box-sizing: border-box;
}
main{
  min-height: 100vh;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
router-link{
  text-decoration: none;
}
</style>
