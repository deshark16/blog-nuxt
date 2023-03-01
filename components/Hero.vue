<template>
    <section class="hero">
        <div class="hero__container">
            <div class="hero__img">
                <img src="@/public/mainImg.png">
            </div>
            <div class="hero__content hero-content">
                <h1 class="hero-content__title">
                    A few words about this blog platform, Ghost, and how this site was made
                </h1>
                <div class="hero-content__subtitle">
                    <p>
                        Why Ghost (& Figma) instead of Medium, WordPress or other options?
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    
</script>

<style lang="scss" scoped>
    .hero{ 
        &__container{
            display: flex;
            align-content: center;
            justify-content: center;
            flex-direction: column;
            max-width: 858px;
            margin: 0 auto;
            padding: 210px 10px 0px 10px;
            @media (max-width: 1023.98px){
                padding: 180px 10px 0px 10px;
            }
            @media (max-width: 767.98px){
                padding: 150px 10px 0px 10px;
            }
            @media (max-width: 574.98px){
                padding: 100px 10px 0px 10px;
            }
        }
        &__img{
            display: flex;
            justify-content: center;
            img{
                @media (max-width: 855px){
                    width: 100%;
                }
            }
        }
    }
    .hero-content{
        margin: 44px 0px 34px 0px;
        @media (max-width: 767.98px){
            margin: 32px 0px 52px 0px;
        }
        &__title{
            font-weight: 700;
            font-size: 54px;
            font-family: New York;
            line-height: 100%;
            text-align: center;
            color: #000000;
            @include adaptiv-font(54, 38);
            margin: 0px 0px 32px 0px;
            @media (max-width: 767.98px){
                margin: 0px 0px 24px 0px;
            }
        }
        &__subtitle{
            margin: 0 auto;
            max-width: 468px;
            text-align: center;
            p{
                font-family: "SF Mono Regular";
                font-weight: 400;
                @include adaptiv-font(20, 16);
                line-height: 170%;
            }
        }
    }
</style>