<template>
    <div class="post__user user">
        <div class="user__left">
            <div class="user__logo">
                <img src="@/public/user.png">
            </div>
            <div class="user__info" v-for="user in data" :key="user.id">
                <h1 class="user__name">
                    <strong>{{ user.name }}</strong>
                </h1>
                <p class="user__lastUptate">
                    Apr 15, 2020 · 4 min read
                </p>
            </div>
        </div>
        <div class="user__right">
            <div class="user__contact">
                <div class="user__facebook">
                    <img src="@/public/facebook.svg">
                </div>
                <div class="user__twitter">
                    <img src="@/public/twitter.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { data } = await useAsyncData('user', () => $fetch('https://jsonplaceholder.typicode.com/users?_start=0&_limit=1'))
</script>

<style lang="scss" scoped>
     .user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 24px 0px 53px 0px;
        @media (max-width: 574.98px){
            flex-direction: column;
            align-items: start;
        }
        @media (max-width: 767.98px){
            margin: 24px 0px 32px 0px;
        }
        // LEFT-USER
        &__left {
            align-items: center;
            display: flex;
        }
        &__logo {
            cursor: pointer;
            margin: 0px 16px 0px 0px;
            img{
                border-radius: 50%;
            }
        }
        &__info {
            font-family: SF Pro Display;
            cursor: pointer;
        }
        // Right-USER
        &__contact {
            display: flex;
            align-items: center;
            border: 1px solid #EAEAEA;
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
            border-radius: 4px;
            @media (max-width: 574.98px){
                margin: 10px 0px 0px 0px;    
            }
        }

        &__facebook,
        &__twitter {
            cursor: pointer;
            padding: 12px 25px;
        }
        &__twitter{
            border-left: 1px solid #EAEAEA;
        }
    } 
</style>