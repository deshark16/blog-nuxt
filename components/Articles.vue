<template>
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
                        v-for="(item,index) of articleItems"
                        :key="index"
                    >
                        <a href="#">
                            <div class="item-img">
                                <img :src="item.img">
                            </div>
                            <h4 class="item-title">
                                {{ item.title }}
                            </h4>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        articleItems: [
            {img: '/_nuxt/public/article1.png', title: 'Here are some things you should know regarding how we work '},
            {img: '/_nuxt/public/article2.png', title: 'Granny gives everyone the finger, and other tips from OFFF Barcelona'},
            {img: '/_nuxt/public/article3.png', title: 'Hello world, or, in other words, why this blog exists'},
            {img: '/_nuxt/public/article4.png', title: 'Here are some things you should know regarding how we work'},
            {img: '/_nuxt/public/article5.png', title: 'Connecting artificial intelligence with digital product design'},
            {img: '/_nuxt/public/article6.png', title: 'It’s all about finding the perfect balance'},
            {img: '/_nuxt/public/article7.png', title: 'I believe learning is the most important skill'},
            {img: '/_nuxt/public/article8.png', title: 'Clients are part of the team'},
            {img: '/_nuxt/public/article9.png', title: 'Clients are part of the team'},
            {img: '/_nuxt/public/article10.png', title: 'Here are some things you should know regarding how we work '},
            {img: '/_nuxt/public/article11.png', title: 'Connecting artificial intelligence with digital product design'},
            {img: '/_nuxt/public/article12.png', title: 'How modern remote working tools get along with Old School Cowboy’s methods'},
        ]
    })
}
</script>

<style lang="scss" scoped>
    .articles{
        margin: 0px 0px 49px 0px;
        &__container{
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 400px;
            // @media (max-width: 1023.98px){
            //     padding: 0 10px;
            // }
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