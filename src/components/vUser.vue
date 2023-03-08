<template>
  <div>
    <form @submit.prevent="submitForm">
      <label>
        Name:
        <input type="text" v-model="name" required>
      </label>
      <br>
      <label>
        Email:
        <input type="email" v-model="email" :class="{ invalid: !isValidEmail }" required>
        <span v-if="email && !isValidEmail" class="error">Please enter a valid email address</span>
      </label>
      <br>
      <label>
        Password:
        <input type="password" v-model="password" :class="{ invalid: !isValidPassword }" required>
        <span v-if="password && !isValidPassword" class="error">Please enter a valid password</span>
      </label>
      <br>
      <button type="submit" :disabled="!isValidForm">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  computed: {
    isValidEmail() {
      const re = /\S+@\S+\.\S+/;
      return re.test(this.email);
    },
    isValidPassword() {
      // Валидация пароля (например, проверка длины или наличия символов)
      return this.password.length >= 8;
    },
    isValidForm() {
      return this.name && this.email && this.password && this.isValidEmail && this.isValidPassword;
    }
  },
  methods: {
    ...mapActions(['addUser']), // Подключаем экшен добавления пользователя из хранилища Vuex
    submitForm() {
      // Отправка формы на сервер или другие действия по вашему выбору
      const user = { name: this.name, email: this.email, password: this.password };
      this.addUser(user); // Вызываем экшен добавления пользователя
      console.log('Submitted form:', user);
    }
  }
}
</script>

<style>
.invalid {
  border: 1px solid red;
}

.error {
  color: red;
}
</style>
