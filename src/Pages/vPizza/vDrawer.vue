<template>
  <div>
    <div class="overlay">
      <div class="drawer">
        <div class="drawer-text">
          <h1>Cart</h1>
          <img width="20" height="20" class="removeBtn" src="../../components/assets/X.svg"
            alt="remove" @click="closeCart" />
        </div>
        <ul class="cart-items">
          <li v-for="item in pizzasInCart" :key="item.id" className="cart-item">
            <img class="cart-item__img" width="70" height="70" :src="item.src" alt="pizza" />
            <div>
              <p>{{ item.name }}</p>
              <b>{{ item.price }} USD</b>
            </div>
            <p>{{ item.qty }}</p>
            <img class="removeBtn" src="../../components/assets/X.svg" alt="remove"
              @click="removePizzaFromCart(item)" />
          </li>
        </ul>
        <!-- {/* ----------------------Bottom ---------------------*/} -->
        <div className="cart-bottom">
          <ul>
            <li>
              <span>Total:</span>
              <div className="line-dashed"></div>
              <b> {{ total }} USD</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div className="line-dashed"></div>
              <b> {{ total * 0.05 }} USD</b>
            </li>
          </ul>
          <button>Send order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'vDrawer',
  props: {
    isOpen: Boolean
  },
  mounted() {
    this.$store.dispatch('GET_PIZZAS_IN_CART', '')
  },
  data() {
    return {
      isOpens: this.isOpen
    }
  },
  computed: {
    ...mapState([
      'pizzasInCart'
    ]),
    total() {
      const tot = this.pizzasInCart.reduce((acc, item) => { return acc + item.qty * item.price }, 0);
      this.$store.dispatch('ACT_SET_TOTAL', tot)
      return tot
    }
  },
  methods: {
    closeCart() {
      return this.$emit('closeDrawer', '')
    },

    removePizzaFromCart(item) {
      let index = this.pizzasInCart.findIndex((el) => el.name === item.name);

      if (item.qty > 1) {
        item.qty = this.pizzasInCart[index].qty - 1;
        axios.put(`https://6387a9cfd9b24b1be3f6e05d.mockapi.io/cart/${item.id}`,
          {
            ...item,
            qty: item.qty,
          }).then
        console.log(item);
        this.$store.dispatch('ACT_CHANGE_QTY_PIZZA_IN_CART', item);
      } else {
        axios.delete(`https://6387a9cfd9b24b1be3f6e05d.mockapi.io/cart/${item.id}`).then
        this.$store.dispatch('ACT_DELETE_PIZZA_FROM_CART', item);
      }


      // await axios.post("https://6387a9cfd9b24b1be3f6e05d.mockapi.io/cart", item)
      //   setTimeout(1000)
      //     .then(this.$store.dispatch('GET_PIZZAS_IN_CART', ''))
      // } else {
      //   item.qty++;

    }
  },
  // watch: {
  //   pizzasInCart: function () {
  //     this.$store.dispatch('GET_PIZZAS_IN_CART', '')
  //   }
  // }
}

</script>

<style lang="scss" scoped>
.drawer {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 420px;
  top: 87px;

  right: 400px;
  border-radius: 10px;
  height: 100%;
  background: #fff;
  box-shadow: -10px 4px 24px rgba(0, 0, 0, 0.1);
  padding: 30px;

  h2,
  h5 {
    margin: 0;
  }
}

.drawer-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;

}

.cart-items {
  // flex: 1;
  overflow: hidden;


}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #f3f3f3;
  border-radius: 20px;
  overflow: hidden;
  padding: 20px;
  margin-bottom: 20px;

  &__img {
    border-radius: 50%;
  }

  div {
    margin-right: 20px;
  }

  p {
    margin-bottom: 5px;
  }
}

.removeBtn,
.plusBtn {
  opacity: 0.5;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &:active {

    transform: translateY(1px);
    opacity: 1;
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.cart-bottom {
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      flex-direction: row;
      align-items: flex-end;

      span {
        width: 70px;
      }
    }
  }

  button {
    width: 100%;
    height: 55px;
    margin-top: 20px;
    background: #9dd558;
    border-radius: 18px;
    border: 0;
    color: #fff;
    font-weight: 500;
    font-size: 16px;

    &:hover {
      background: lighten($color: #9dd558, $amount: 7%);
      cursor: pointer;
    }

    &:active {
      background: darken($color: #9dd558, $amount: 10%);
      cursor: pointer;
    }
  }
}

.line-dashed {
  height: 1px;
  display: flex;
  flex: 1;
  border-bottom: 0.5px dashed lightgray;
  margin-right: 15px;
}

.clearBtn {
  width: 25px;
  margin-top: 10px;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
}
</style>