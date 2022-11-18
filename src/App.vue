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
// Check mobile or PC---------------

import MobileDetect from 'mobile-detect';
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile() != null;

if (isMobile) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}

//-----------------------------------

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
html,body{
  height: 100%;
  box-sizing: border-box;
  line-height: 1;

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
li{
  list-style: none;
}
router-link{
  text-decoration: none;
}
</style>
