<template>
  <li class="card" v-for="pizza in pizzas" :key="pizza.id">
    <img v-if="!liked" @click="clickFavorite" class="fav-icon" src="../../components/assets/unliked.svg" alt="icon-fav">
    <img v-if="liked" @click="clickFavorite" class="fav-icon" src="../../components/assets/liked.svg" alt="icon-fav">
    <img :src="pizza.src" alt="pizza" class="card__img">
    <p class="name">{{ pizza.name }}</p>
    <div class="line"></div>
    <div class="cardBottom">
      <p class="price">Price:</p>
      <pre>{{ pizza.price }} USD</pre>

      <img src="../../components/assets/plus.svg" alt="plus-icon" class="plusBtn" @click="addPizzaToCart(pizza)">
    </div>
  </li>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'vCard',
  data() {
    return {
      liked: false
    }
  },
  computed: {
    ...mapState([
      'pizzas',
      'pizzasInCart',
      'total'
    ])
  },
  methods: {
    async addPizzaToCart(item) {
      let index = this.pizzasInCart.findIndex((el) => el.name === item.name);
      console.log(index);


      if (!this.pizzasInCart.find(el => el.name === item.name)) {

        this.$store.dispatch('ACT_ADD_PIZZA_IN_CART', item)
        const total = this.total + item.price
        this.$store.dispatch('ACT_SET_TOTAL', total)
        axios.post("https://6387a9cfd9b24b1be3f6e05d.mockapi.io/cart", item)
      } else {

        item.qty++;
        const total = this.total + item.price

        axios.put(`https://6387a9cfd9b24b1be3f6e05d.mockapi.io/cart/${this.item.id}`,
          {
            ...item,
            qty: item.qty,
          }).then
        this.$store.dispatch('ACT_CHANGE_QTY_PIZZA_IN_CART', item)
        this.$store.dispatch('ACT_SET_TOTAL', total)
      }
    }
  },
  clickFavorite() {
    console.log(this.liked);

    this.liked = true;
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid #f3f3f3;
  padding: 20px;
  margin: 37px;
  width: 200px;
  border-radius: 40px;

  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.06);
    transform: translateY(-5px);
  }


  .price {
    color: grey;
    font-size: 20px;
    padding: 5px;
  }

  pre {
    font-size: 15px;
    padding: 5px;
  }
}

.card__img {
  width: 150px;
  border-radius: 50%;
}

.name {
  font-size: 25px;
  color: #000;
  margin: 15px;
}

.cardBottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.plusBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  opacity: 0.5;


  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  &:active {

    transform: translateY(1px);
    opacity: 1;
  }
}

.fav-icon {
  width: 25px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(1px);
  }
}

.line {
  display: block;
  width: 90%;
  align-self: center;
  margin-bottom: 5px;
  border: 0.5px solid lightgrey;
}
</style>