<template>
    <main class="main">
        <Hero />
        <section class="articles">
            <div class="articles__container">
                <hr>
                <div class="articles__header">
                    <h1 class="articles__title">
                        All articles
                    </h1>
                </div>
                <nav class="articles__nav nav-article">
                    <ul class="nav-article__list">
                        <li
                            class="item"
                            v-for="item of data"
                            :key="item.id"
                        >
                            <nuxt-link @click="$router.push('/currentArticle/'/* + item.id*/)">
                                <div class="item-img">
                                    <img :src="item.thumbnailUrl">
                                </div>
                                <h4 class="item-title">
                                    {{ item.title }}
                                </h4>
                            </nuxt-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    </main>
</template>

<script setup>
const { data } = await useAsyncData('article', () => $fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=12'));

</script>

<style lang="scss">
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.articles {
    margin: 0px 0px 49px 0px;
        &__container{
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 400px;
            @media (max-width: 1440px){
                padding: 0 10px;
            }
        }
        &__header{
            display: flex;
            align-content: center;
            justify-content: center;
            flex-direction: column;
        }
        &__title{
            display: flex;
            justify-content: center;
            margin: 64px 0px 39px 0px;
            font-weight: 700;
            @include adaptiv-font(44, 28);
            line-height: 53px;
            text-align: center;
            @media (max-width: 767.98px){
                margin: 56px 0px 29px 0px;
            }
        }
    }
    .nav-article{
        &__list{
            display: grid;
            grid-template-columns: 1fr 1fr;
            list-style: none;
            justify-items: center;
            row-gap: 64px;
            @media (max-width: 1440px){
                padding: 0 180px;
            }
            @media (max-width: 1023.98px){
                padding: 0;
            }
            @media (max-width: 660px){
                row-gap: 42px;
                grid-template-columns: 1fr;
            }
            .item{
                a{
                    text-decoration: none;
                    display: flex;
                    align-content: center;
                    justify-content: center;
                    flex-direction: column;
                    text-align: center;
                    max-width: 304px;
                    color: #000;
                    .item-img{
                        img{
                            @media (max-width: 350px){
                                width: 100%;
                            }
                        }
                    }
                    .item-title{
                        @include adaptiv-font(22, 18);
                        font-weight: 700;
                        font-family: sans-serif;
                        line-height: 120%;
                    }
                }
            }
        }
    }
</style>