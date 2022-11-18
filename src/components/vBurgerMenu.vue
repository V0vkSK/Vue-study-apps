<template>
  <div class="menu-b">
    <div @click="openBurger" :class="{burger, close_burger}">
      <span></span>
    </div>
    <nav v-if="this.isActiveBurgerMenu" class="menu-b__body">
                  
                  <ul class="menu-b__list">
                  
                    <li><router-link class="menu-b__link" :to="{name:'home'}" @click="dropMenuClose">Home</router-link></li>

                    <li><router-link class="menu-b__link" :to="{name:'cv'}" @click="dropMenuClose">My CV</router-link></li>

                    <li class="drop-container">
                      <a class="menu-b__link" :class="{arrow_up, arrow_down}"  href="#" @click="dropMenu">Movies reviews</a>
                        <ul class="sub-menu" v-if="this.isActiveSubMenu">
                          <li class="sub-menu__item">
                            <RouterLink class="menu-b__link sub" @click="dropMenuClose" to="/movies">Movies</RouterLink>
                          </li>
                          <div class="line"></div>
                          <li class="sub-menu-list__item">
                            <RouterLink class="menu-b__link sub" @click="dropMenuClose" to="/authors">Authors</RouterLink>
                          </li>
                          <div class="line"></div>
                          <li class="sub-menu-list__item">
                            <RouterLink class="menu-b__link sub" @click="dropMenuClose" to="/search">Search</RouterLink>
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
      isActiveBurgerMenu: false,
      isActiveSubMenu: false,
      burger: true,
      close_burger: false,
      arrow_up: false,
      arrow_down: true
    }
  },
  methods: {
    openBurger() {
      return (
        this.burger = !this.burger,
        this.close_burger = !this.close_burger,
        this.isActiveBurgerMenu = !this.isActiveBurgerMenu)
    },
    dropMenu() {
      return (
        this.arrow_down = !this.arrow_down,
        this.arrow_up = !this.arrow_up,
        this.isActiveSubMenu = !this.isActiveSubMenu)
    },
    dropMenuClose(){
      return (
        this.burger = !this.burger,
        this.close_burger = !this.close_burger,
        this.isActiveBurgerMenu = !this.isActiveBurgerMenu)
    },
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
    opacity: 0.9;
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
      margin: 50px;
    }

		&__link {
      position: relative;
      font-size: 40px;
      color: white;
      text-decoration: none;
		}
}
.menu-b__link .sub{
  position: absolute;
  top: 20px;
  left: 0;
  font-size: 2rem;
  padding: 10px;
}
.burger, .close_burger{
  z-index: 10;
  display: block;
  position: relative;
  top: 25px;
  right: 30px;
  width: 30px;
  height: 20px;
  cursor: pointer;
  background-color: #c9d7e4;
  transform: rotate(0deg);
  transition: all 0.3s ease 0s;
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
.close_burger::before, .close_burger::after{
  content: "";
}
.close_burger::after, .close_burger::before{
  left: 0;
  position: absolute;
  height: 10%;
  width: 100%;
  
  transition: all 0.3s ease 0s;
  background-color: blue;
}
.close_burger::before{
  top: 50%;
  transform: rotate(45deg);
  transition: all 0.3s ease 0s;
}
.close_burger::after{
  top: 50%;
  transform: rotate(135deg);
}
// Стрелка справа от выпадающего меню
.arrow_down::after{
  content: "";
  display: inline-block;
  margin-left: 15px;
  background-color: white;
  width: 20px;
  height: 20px;
  border-top: 2px solid white;
  border-right: 2px solid white;
  transform: rotate(135deg) translate(-50%,0px); 
  transition: all 0.3s ease 0s;
  border-left: 0px; 
  border-bottom: 0px;
  background-color: transparent;
}
.arrow_up::after{
  content: "";
  display: inline-block;
  margin-left: 35px;
  background-color: white;
  width: 20px;
  height: 20px;
  border-top: 2px solid white;
  border-right: 2px solid white;
  transform: rotate(-45deg) translate(-50%,0px); 
  transition: all 0.3s ease 0s;
  border-left: 0px; 
  border-bottom: 0px;
  background-color: transparent;
}
// стили выпадающего меню
  .drop-container{
    position: relative;
    transform: opacity(0.5);
  }
  .sub-menu{
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: opacity(1);
    transition: all 0.3s ease;
    position: absolute;
    top: 150%;
    left: 30%;
    padding: 10px 40px;
    outline: 1px solid gray;
  }
 .line{
  display: block;
  width: 300px;
  height: 1px;
  // padding: 10px;
  background-color: #fff;
 }
  </style>
