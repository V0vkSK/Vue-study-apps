<template>
  <div class="menu-b">
    <div @click="openBurger" class="burger">
      <span></span>
    </div>
    <nav v-if="this.isActiveBurgerMenu" class="menu-b__body">
                  
                  <ul class="menu-b__list">
                  
                    <li><router-link class="menu-b__link" :to="{name:'home'}" @click="dropMenuClose">Home</router-link></li>

                    <li><router-link class="menu-b__link" :to="{name:'cv'}" @click="dropMenuClose">My CV</router-link></li>

                    <li class="drop-container">
                      <a class="menu-b__link" href="#" @click="dropMenu">Movies reviews</a>
                        <ul v-if="this.isActiveSubMenu">
                          <li>
                            <RouterLink class="menu-b__link" @click="dropMenuClose" to="/movies">Movies</RouterLink>
                          </li>
                          <li>
                            <RouterLink class="menu-b__link" to="/authors">Authors</RouterLink>
                          </li>
                        </ul>
                    </li>

                  </ul>
    </nav>
  </div>
</template>

<script>
  export default {
  name: 'vBurgerMenu',
  data() {
    return {
      isActiveBurgerMenu: true,
      isActiveSubMenu: false
    }
  },
  methods: {
    dropMenu() {
      return this.isActiveSubMenu = !this.isActiveSubMenu
    },
    dropMenuClose(){
      return this.isActiveBurgerMenu = false
    },
    openBurger() {
      return this.isActiveBurgerMenu = !this.isActiveBurgerMenu
    }
  }
  }
</script>

<style lang="scss" scoped>
.menu-b {

  &__body{
    z-index: 10;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.8;
    pointer-events: all;
    display: flex;
    justify-content: center;
    }
		&__list {
      display: flex;
      flex-direction: column;
      padding: 50px;
      align-items: center;
		}
    &__list > li{
      padding: 50px;
    }

		&__link {
      font-size: 2.5rem;
      color: white;
      text-decoration: none;
		}
}
.burger{
  z-index: 10;
  display: block;
  position: relative;
  top: 25px;
  right: 30px;
  width: 30px;
  height: 20px;
  cursor: pointer;
  background-color: #c9d7e4;
  
}
.burger span, .burger::after, .burger::before{
  left: 0;
  position: absolute;
  height: 10%;
  width: 100%;
  transition: all 0.3s ease 0s;
  background-color: blue;
}
.burger::before, .burger::after{
  content: "";
}
.burger::before{
  top: 0;
}
.burger::after{
  bottom: 0;
}
.burger span{
  top: 50%;
  transform: scale(1) translate(0px,-50%);
}
</style>
