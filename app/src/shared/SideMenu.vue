<template>
<div class="menu">
    <div class="menu__user">
        <img src="#" alt="user-icon" class="menu__user-icon">
        <div class="menu__user-name"></div>
        <div class="menu__user-role"></div>
    </div>
    <nav class="menu__nav">
        <ul class="menu__nav-list">
            <li class="menu__nav-item">
                <RouterLink class="menu__nav-link" v-if="!isAuth" to="/">Авторизация</RouterLink>
            </li>
            <li class="menu__nav-item">
                <RouterLink class="menu__nav-link" v-if="!isAuth" to="/">Регистрация</RouterLink>
            </li>
            <li class="menu__nav-item">
                <RouterLink class="menu__nav-link" v-if="isAuth" to="/">Список польователей</RouterLink>
            </li>
            <li class="menu__nav-item">
                <RouterLink class="menu__nav-link" v-if="isAuth && isAdmin" to="/">Добавить пользователя</RouterLink>
            </li>
            <li class="menu__nav-item">
                <RouterLink class="menu__nav-link" v-if="isAuth && isAdmin" to="/">Список польователей</RouterLink>
            </li>
        </ul>
    </nav>
    <div class="theme-switch">
        <img src="#" alt="theme-marker" class="theme-switch__marker">
    </div>
</div>
</template>

<script>
    import { RouterLink } from 'vue-router';
    import { mapState } from 'vuex';
    export default{
        data(){
            return{

            }
        },
        computed:{
            ...mapState(['isAuth']),
            ...mapState('admin', ['isAdmin'])
        }
    }
</script>

<style scoped lang="scss">
    .menu{
        width: 250px;
        height: 100vh;
        background-color: black;
        position: relative;
        z-index: 2;
        left: 0;
        top: 0;
    }
</style>
