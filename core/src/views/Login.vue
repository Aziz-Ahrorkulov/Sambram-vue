<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="loginUser">
            <label>Username:</label>
            <input type="text" v-model="username" required>
            <label>Password:</label>
            <input type="password" v-model="password" required>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    name: "LoginView",
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        loginUser() {
            const loginData = {
                username: this.username,
                password: this.password,
            };

            axios
                .post("http://127.0.0.1:8000/api/login/", loginData)
                .then((response) => {
                    // Получаем токен из ответа сервера
                     const token = response.data.access;
                    // Сохраняем токен в куках
                     localStorage.setItem("jwt_token", token);
                    
                    // Продолжаем дальнейшие действия, например, переход на другую страницу
                    // или обновление данных на текущей странице
                    console.log("Response:", response.data);

                    this.$router.push('/dashboard/')
                })
                .catch((error) => {
                    // Обработка ошибок
                    console.error("Error:", error);
                });
        },
        setTokenInCookies(token) {
            // Установка куки с токеном
            const expires = new Date();
            expires.setDate(expires.getDate() + 7); // Устанавливаем срок действия куки на 7 дней
            document.cookie = `jwt_token=${token}; expires=${expires.toUTCString()}; path=/; samesite=lax`;
        },
    },
};
</script>
  
<style></style>