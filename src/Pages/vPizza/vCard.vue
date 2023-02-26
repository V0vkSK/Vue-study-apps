<template>
  <li class="card"
    v-for="pizza in pizzas.filter(el => el.name.toLowerCase().includes(searchData.toLowerCase()))"
    :key="pizza.id">
    <img v-if="!liked" @click="clickFavorite" class="fav-icon"
      src="../../components/assets/unliked.svg" alt="icon-fav">
    <img v-if="liked" @click="clickFavorite" class="fav-icon" src="../../components/assets/liked.svg"
      alt="icon-fav">
    <img :src="pizza.src" alt="pizza" class="card__img">
    <p class="name">{{ pizza.name }}</p>
    <div class="line"></div>
    <div class="cardBottom">
      <p class="price">Price:</p>
      <pre>{{ pizza.price }} USD</pre>

      <img src="../../components/assets/plus.svg" alt="plus-icon" class="plusBtn"
        @click="addPizzaToCart(pizza)">

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
      'total',
      'searchData'
    ])
  },
  methods: {
    addPizzaToCart(item) {

      if (!this.pizzasInCart.find(el => el.name === item.name)) {

        this.$store.dispatch('ACT_ADD_PIZZA_IN_CART', item)
        const total = this.total + item.price
        this.$store.dispatch('ACT_SET_TOTAL', total)
        axios.post("https://6387a9cfd9b24b1be3f6e05d.mockapi.io/cart", item)
      } else {
        let idInCart = this.pizzasInCart.filter((el) => el.name === item.name);

        idInCart[0].qty++;
        const total = this.total + item.price

        axios.put(`https://6387a9cfd9b24b1be3f6e05d.mockapi.io/cart/${idInCart[0].id}`,
          {
            ...item,
            qty: idInCart[0].qty,
          }).then
        this.$store.dispatch('ACT_CHANGE_QTY_PIZZA_IN_CART', idInCart[0])
        setTimeout(() => this.$store.dispatch('ACT_SET_TOTAL', total), 5)
      }
    }
  },
  clickFavorite() {
    console.log(this.liked);

    this.liked = !this.liked;
  },
  mounted() {
    if (!this.pizzas) {
      this.$router.currentRoute.value.name === 'pizza' ? this.$store.dispatch('ACT_PIZZA_ACTIVE', false) : null;
      this.$store.dispatch('GET_PIZZAS', '');
      this.$store.dispatch('GET_PIZZAS_IN_CART', '');
    }
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