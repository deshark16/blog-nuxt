<template>
    <div :class="share">
        <div 
            class="share-mobile" 
            :class="{mobileSizeShare : mobileSize == true}" 
            v-if="mobileSize == true"
        >
            Share:
        </div>
        <br>
        <div class="share__container">
            <div class="share__facebook">
                <img src="@/public/facebook.svg"><div :class="{mobileSizeShare : mobileSize == false}" v-if="mobileSize == false">Share on Facebook</div>
            </div>  
            <div class="share__twitter">
                <img src="@/public/twitter.svg"><div :class="{mobileSizeShare : mobileSize == false}" v-if="mobileSize == false">Share on Twitter</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const mobileSize = ref(false)
const handleView = () => {
    window.innerWidth <= 768
        ? (mobileSize = true)
        : (mobileSize = false)
}
Window.addEventListener('change', handleView)
// export default {
//     setup() {
        
//     },
//     data: () => ({
//         mobileSize: true
//     }),
//     methods: {
//         handleView() {
            
//         }
//     },
//     created() {
//         this.handleView();
//             Window.addEventListener("resize", this.handleView);
//             console.log(this.pageView);
//         },
//     destroyed() {
//         Window.removeEventListener("resize", this.handleView);
//         console.log(this.pageView);
//     }
// }
</script>

<style lang="scss">
    .share-mobile{
        @include adaptiv-font(16, 14);
        font-family: SF Pro Display;
        font-weight: 500;
    }
    .share{
        margin: 77px 0px 32px 0px;
        &__container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 64px;
            align-items: center;
            justify-items: center;
            border: 1px solid #EAEAEA;
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
            border-radius: 4px;
            @media (max-width: 574.98px){
                margin: 10px 0px 0px 0px;    
            }
        }
        &__facebook,
        &__twitter {
            display: flex;
            align-items: center;
            cursor: pointer;
            font-family: SF Pro Display;
            font-weight: 500;
            img {
                margin: 0px 16px 0px 0px;
            }
        }
        &__facebook{
            border-right: 1px solid #EAEAEA;
        }
    }
</style>