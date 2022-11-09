<template>
    <header class="header">
        <div class="container">
            <vLogo/>
            <nav>
              <router-link class="link" :to="{name:'home'}" @click="dropmenuClosed">Home</router-link>
              <div class="drop-container">
                <button type="button" class="link isActive" @click="dropmenu">Movies reviews</button>
                <vDropMenu 
                class="dropmenu"
                :isVisible="isVisible"
                @isvisible="dropmenuClosed"
                />
              </div>
                      
            </nav>
        </div>
    </header>
</template>

<script>
import vDropMenu from './vDropMenu.vue';
import vLogo from './vLogo.vue';


    export default {
    name: "vHeader",
  components: { vLogo, vDropMenu },
  data() {
    return {
      isVisible: false,
      
    }
  },
  
  methods: {
    dropmenu() {
      console.log(`dropmenu Header before: ${this.isVisible}`);
      return this.isVisible = !this.isVisible
    },  
    dropmenuClosed() {
      console.log(`dropmenuClosed Header before: ${this.isVisible}`);
      return this.isVisible = false
    },  
    
  }
  
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 7;
  display: flex;
  width: 100%;
  min-height: 70px;
  background-color: #c9d7e4;
  }

.container {
  display: flex;
  width: 1100px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
}
nav{
  display: flex;
  flex-direction: row;
}
.link{
 text-decoration: none;
  background: #13b00b;
  color: #fff;
  border: 0;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 5px;
  margin-right: 20px;
  cursor: pointer;
    &:hover{
      background: #0a4e25;
      color: rgb(0, 191, 255);
    }
}
.drop-container{
  position: relative;
}
.dropmenu{
  position: absolute;
  top: 100%;
  left: 0;
   
}
.router-link-active{
    text-decoration: none;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 5px;
  margin-right: 20px;
  background: #0a4e25;
color:rgb(0, 191, 255)  
}
</style>