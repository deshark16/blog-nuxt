<template>
    <header class="header">
        <div class="header__container">
            <div class="header__logo">
                <img src="@/public/NORDICROSE.svg">
            </div>
            <nav 
                class="header__nav navbar" 
                :class="{isActive : menuActive}"
            >
                <ul class="navbar__list">
                    <li
                        v-for="item in navbarItems"
                        :key="item.id"
                    >
                        <a href="#">
                            {{ item.value }}
                        </a>
                    </li>
                </ul>
            </nav>
            <div 
                class="header__menu-icon"
                :class="{isActive : menuActive}"
                @click="menuActive =! menuActive"
            >
                <span></span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data: () => ({
        menuActive: false,
        navbarItems: [
            { id: 1, value: 'Blog' },
            { id: 2, value: 'About' },
            { id: 3, value: 'Links' },
            { id: 4, value: 'Projects' },
        ]
    })
}
</script>

<style lang="scss" scoped>
    .header{
        position: fixed;
        left: 0;
        width: 100%;
        top: 0;
        z-index: 10;
        backdrop-filter: blur(10px);
        box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.16);
        &__container{
            max-width: 1440px;
            padding: 0 64px;
            display: flex;
            margin: 0 auto;
            align-items: center;
            justify-content: space-between;
            min-height: 134px;
            @media (max-width: 1300px){
                padding: 0 40px;
            }
            @media (max-width: 1023.98px){
                padding: 0 20px;
                min-height: 100px;
            }
            @media (max-width: 991.98px){
                padding: 0 10px;
            }
            @media (max-width: 574.98px){
                min-height: 70px;
            }
        }
        &__menu-icon {
            display: none;
            @media (max-width: 767.98px){
                z-index: 1001;
                display: block;
                position: relative;
                width: 40px;
                height: 30px;
                @media (max-width: 574.98px){
                    width: 30px;
                    height: 15px;
                }
                cursor: pointer;
                    & span,
                    &::before,
                    &::after {
                      left: 0;
                      position: absolute;
                      width: 100%;
                      height: 10%;
                      -webkit-transition: all 0.3s ease;
                      -o-transition: all 0.3s ease;
                      transition: all 0.3s ease;
                      background-color: #000;
                    }
                    &::before,
                    &::after {
                      content: "";
                    }
                
                    &::before {
                      top: 0;
                    }
                
                    &::after {
                      bottom: 0;
                    }
                    & span {
                      top: 50%;
                      -webkit-transform: scale(1) translate(0px, -50%);
                          -ms-transform: scale(1) translate(0px, -50%);
                              transform: scale(1) translate(0px, -50%);
                    }
                    &.isActive span {
                      -webkit-transform: scale(0) translate(0px, -50%);
                          -ms-transform: scale(0) translate(0px, -50%);
                              transform: scale(0) translate(0px, -50%);
                    }
                
                    &.isActive::before {
                      top: 50%;
                      -webkit-transform: rotate(-45deg) translate(0px, -50%);
                          -ms-transform: rotate(-45deg) translate(0px, -50%);
                              transform: rotate(-45deg) translate(0px, -50%);
                    }
                
                    &.isActive::after {
                      bottom: 50%;
                      -webkit-transform: rotate(45deg) translate(0px, 50%);
                          -ms-transform: rotate(45deg) translate(0px, 50%);
                              transform: rotate(45deg) translate(0px, 50%);
                }
            }
        }
        &__logo{
            z-index: 0;
            img {
                @media (max-width: 1023.98px){
                    width: 300px;
                }
                @media (max-width: 400px){
                    width: 250px;
                }
            }
        }
    }
    .navbar{
        @media (max-width: 767.98px){
            position: fixed;
            width: 100%;
            top: 0;
            height: 100vh;
            right: -200%;
            transition: .3s right ease;
            z-index: 10;
            display: flex;
            justify-content: center;
            padding: 100px 0;
            background: rgba(255,255,255,0.5);
            backdrop-filter: blur(30px);
            overflow-y: auto;

            @media (max-width: 574.98px){
                padding: 50px 0;
            }
        }
        &.isActive{
            right: 0;
        }
        &__list{
            list-style: none;
            display: flex;
            align-items: center;
            @media (max-width: 767.98px){
                flex-direction: column;  
            }
            li{
                @include adaptiv-font(20, 16);
                letter-spacing: 0.12em;
                text-transform: uppercase;
                font-family: New York;
                font-weight: 500;
                position: relative;
                &::before{
                    border-bottom: 2px solid #000;
                    position: absolute;
                    content: '';
                    bottom: -55px;
                    left: 0;
                    transition: .3s width ease; 
                    height: 2px;
                    width: 0%;
                    @media (max-width: 1023.98px){
                        bottom: -40px;
                    }
                    @media (max-width: 574.98px){
                        bottom: -10px;
                    }
                    // @media (max-height: 500px){
                    //     bottom: -10px;
                    // }
                }
                &:hover {
                    &::before {
                        width: 100%;
                    }
                }
                @media (max-width: 767.98px){
                    margin: 25px 0px;
                    @include adaptiv-font(48, 26);
                }
                @media (max-width: 574.98px){
                    margin: 10px 0px;
                }
                @media (max-height: 500px){
                    margin: 15px 0px;
                }
                &:not(:last-child){
                    margin-right: 34px;
                }
                @media (max-width: 1023.98px){
                    &:not(:last-child){
                        margin-right: 15px;
                    }
                }
                
                a {
                    color: #000;
                    text-decoration: none;
                }
            }
        }
    }
    
</style>