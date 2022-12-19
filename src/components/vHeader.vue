<template>
  <header class="header">
    <div class="header__container">
      <vLogo />
      <div class="header-menu menu"></div>
      <nav class="menu__body">

        <ul class="menu__list">

          <li><router-link class="menu__link" :to="{ name: 'home' }" @click="dropmenuClosed">Home</router-link></li>

          <li><router-link class="menu__link" :to="{ name: 'test' }" @click="dropmenuClosed">Test</router-link></li>

          <li><router-link class="menu__link" :to="{ name: 'cv' }" @click="dropmenuClosed">My CV</router-link></li>

          <li class="drop-container">
            <button type="button" class="menu__link isActive" @click="dropmenu">Movies reviews</button>
            <vDropMenu class="dropmenu" :isVisible="isVisible" @isvisible="dropmenuClosed" />
          </li>
          <li><router-link class="menu__link" :to="{ name: 'pizza' }" @click="PizzaActive">Pizza-shop</router-link></li>
        </ul>

      </nav>
    </div>
    <vBurgerMenu class="burgerComp" />
  </header>
</template>

<script>
import vDropMenu from './vDropMenu.vue';
import vLogo from './vLogo.vue';
import vBurgerMenu from './vBurgerMenu.vue'
import { mapState } from 'vuex';


export default {
  name: "vHeader",
  components: { vLogo, vDropMenu, vBurgerMenu },
  data() {
    return {
      isVisible: false,
      // isPizzaActive: true
    }
  },
  computed: {
    ...mapState([
      'isPizzaActive'
    ])
  },

  methods: {
    dropmenu() {
      return this.isVisible = !this.isVisible
    },
    dropmenuClosed() {
      return this.isVisible = false
    },
    PizzaActive() {
      this.$store.dispatch('ACT_PIZZA_ACTIVE', !this.isPizzaActive)
    },

  }

}
</script>

<style lang="scss" scoped>
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
    align-items: center;
  }
}

.menu {
  &__list {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__link {
    text-decoration: none;
    background: #2071ce;
    color: #fff;
    border: 0;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 5px;
    margin-right: 20px;
    cursor: pointer;

    &:hover {
      background: #0a144e;
      color: rgb(64, 205, 252);
    }
  }
}

.drop-container {
  position: relative;
}

.dropmenu {
  position: absolute;
  top: 100%;
  left: 0;

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
</style>