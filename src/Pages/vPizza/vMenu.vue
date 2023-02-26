<template>
  <div>
    <header class="header">
      <div class="header__container">
        <div class="logo">
          <img src="/img/Pizza3.jpeg" alt="pizza">
          <div class="logo-text">
            <h2>The
              best
              <span>Pizza</span>-shop
            </h2>
            <p>Maiden with love for you...
            </p>
          </div>
        </div>

        <nav class="menu">
          <router-link class="menu__link" @click="PizzaDeactivate"
            :to="{ name: 'clock' }">Clock</router-link>
        </nav>



        <div class="header-right">
          <div @click="drawerIsOpen" class="cart">
            <span>{{
              total
            }}
              USD</span>
          </div>

          <img src="../../components/assets/user.png" alt="user-icon" class="icon-user">
        </div>

      </div>
      <vBurgerMenu class="burgerComp" />
    </header>
    <vDrawer v-if="isDrawerOpen" @closeDrawer="drawerClose" />
  </div>
</template>

<script>

import vBurgerMenu from '../../components/vBurgerMenu.vue'
import { mapState } from 'vuex';
import vDrawer from './vDrawer.vue';


export default {
  name: 'vMenu',
  components: {
    vDrawer,
    vBurgerMenu,

  },
  data() {
    return {
      isDrawerOpen: false
    }
  },
  computed: {
    ...mapState([
      `isPizzaActive`,
      'total'
    ]),

  },
  methods: {
    PizzaDeactivate() {
      setTimeout(() => this.$store.dispatch('ACT_PIZZA_ACTIVE', false), 1)
      this.searchResult = '';
      this.$store.dispatch('ACT_SET_SEARCH', '');
    },
    drawerIsOpen() {
      this.isDrawerOpen = true
    },
    drawerClose() {
      this.isDrawerOpen = false
    }
  },
  mounted() {
    // this.$store.dispatch('ACT_SET_TOTAL', +localStorage.total)
    // this.$store.dispatch('GET_PIZZAS', '').then
    // this.$store.dispatch('GET_PIZZAS_IN_CART', '').then
    // this.$store.dispatch('ACT_SET_TOTAL', localStorage.total)
  }
}
</script>

<style lang="scss" scoped>
img {
  margin-right: 15px;
  width: 50px;
}

.logo {
  display: flex;
  flex-direction: row;

  img {
    border-radius: 50%;
  }
}

.logo-text {

  span {
    color: red;
  }

  p {
    padding: 5px;
    color: rgb(119, 111, 111);
  }
}

.header {
  position: fixed;
  z-index: 10;
  display: flex;
  width: 100%;
  min-height: 70px;
  background-color: #c9d7e4;

  &__container {
    display: flex;
    width: 1100px;
    margin: 0px auto;
    position: relative;
    align-items: center;
    justify-content: space-between;
  }
}

.menu {
  display: flex;
  flex-direction: row;
  align-items: center;


  &__link {
    text-decoration: none;
    background: #2071ce;
    color: #fff;
    border: 0;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #0a144e;
      color: rgb(64, 205, 252);
    }
  }
}

.router-link-active {
  text-decoration: none;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 5px;
  margin-right: 20px;
  background: #0a144e;
  color: rgb(0, 191, 255)
}

// PC
@media (min-width: 767px) {
  .menu__list {
    display: flex;
    justify-content: space-between;
  }

  // body._pc .menu__list > li {
  //   opacity: 1;
  //   visibility: visible;
  //   transform: translate(0px, 0px);
  //   pointer-events: all;    
  // }
  .burgerComp {
    display: none;
  }
}

// Mobile
@media (max-width:767px) {
  .menu__list {
    display: none;
  }

  // body._touch .menu__list > li{
  //   opacity: 0;
  //   visibility: hidden;
  //   transform: translate(0px, 0px);
  //   pointer-events: none;
  // }
  .burgerComp {
    display: flex;
  }
}

.header-right {
  display: flex;
}

.cart {
  display: flex;
  cursor: pointer;
  align-items: center;
  margin: 25px;
  margin-left: 10px;

  &::before {
    content: '';
    background-repeat: no-repeat;
    width: 19px;
    height: 19px;
    margin-right: 15px;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' encoding='utf-8'?%3e%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 122.9 107.5' style='enable-background:new 0 0 122.9 107.5' xml:space='preserve'%3e%3cg%3e%3cpath d='M3.9,7.9C1.8,7.9,0,6.1,0,3.9C0,1.8,1.8,0,3.9,0h10.2c0.1,0,0.3,0,0.4,0c3.6,0.1,6.8,0.8,9.5,2.5c3,1.9,5.2,4.8,6.4,9.1 c0,0.1,0,0.2,0.1,0.3l1,4H119c2.2,0,3.9,1.8,3.9,3.9c0,0.4-0.1,0.8-0.2,1.2l-10.2,41.1c-0.4,1.8-2,3-3.8,3v0H44.7 c1.4,5.2,2.8,8,4.7,9.3c2.3,1.5,6.3,1.6,13,1.5h0.1v0h45.2c2.2,0,3.9,1.8,3.9,3.9c0,2.2-1.8,3.9-3.9,3.9H62.5v0 c-8.3,0.1-13.4-0.1-17.5-2.8c-4.2-2.8-6.4-7.6-8.6-16.3l0,0L23,13.9c0-0.1,0-0.1-0.1-0.2c-0.6-2.2-1.6-3.7-3-4.5 c-1.4-0.9-3.3-1.3-5.5-1.3c-0.1,0-0.2,0-0.3,0H3.9L3.9,7.9z M96,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C86.4,92.6,90.7,88.3,96,88.3L96,88.3z M53.9,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C44.3,92.6,48.6,88.3,53.9,88.3L53.9,88.3z M33.7,23.7l8.9,33.5h63.1l8.3-33.5H33.7L33.7,23.7z' fill='black'/%3e%3c/g%3e%3c/svg%3e");

  }

  &:hover {
    color: blue;

    &:before {
      content: '';
      transform: translateX(-10px);

      background-image: url("data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' encoding='utf-8'?%3e%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 122.9 107.5' style='enable-background:new 0 0 122.9 107.5' xml:space='preserve'%3e%3cg%3e%3cpath d='M3.9,7.9C1.8,7.9,0,6.1,0,3.9C0,1.8,1.8,0,3.9,0h10.2c0.1,0,0.3,0,0.4,0c3.6,0.1,6.8,0.8,9.5,2.5c3,1.9,5.2,4.8,6.4,9.1 c0,0.1,0,0.2,0.1,0.3l1,4H119c2.2,0,3.9,1.8,3.9,3.9c0,0.4-0.1,0.8-0.2,1.2l-10.2,41.1c-0.4,1.8-2,3-3.8,3v0H44.7 c1.4,5.2,2.8,8,4.7,9.3c2.3,1.5,6.3,1.6,13,1.5h0.1v0h45.2c2.2,0,3.9,1.8,3.9,3.9c0,2.2-1.8,3.9-3.9,3.9H62.5v0 c-8.3,0.1-13.4-0.1-17.5-2.8c-4.2-2.8-6.4-7.6-8.6-16.3l0,0L23,13.9c0-0.1,0-0.1-0.1-0.2c-0.6-2.2-1.6-3.7-3-4.5 c-1.4-0.9-3.3-1.3-5.5-1.3c-0.1,0-0.2,0-0.3,0H3.9L3.9,7.9z M96,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C86.4,92.6,90.7,88.3,96,88.3L96,88.3z M53.9,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C44.3,92.6,48.6,88.3,53.9,88.3L53.9,88.3z M33.7,23.7l8.9,33.5h63.1l8.3-33.5H33.7L33.7,23.7z' fill='blue'/%3e%3c/g%3e%3c/svg%3e");
    }

  }

  img {
    margin-right: 15px;
  }
}



.icon-user {
  width: 18px;
  height: 18px;
  display: flex;
  align-self: center;
  margin-left: 50px;
}
</style>