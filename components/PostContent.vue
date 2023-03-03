<template>
    <div class="post__content">
        <div class="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. <br><br>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus. </div>
        <br><br>
        <div class="post__title"><strong>Next on the pipeline</strong></div>
        <br>
        <div class="post__text">Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <br><br>Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. </div>
        <div class="post__img" style="text-align: center;">
            <img src="@/public/content.png">
            <span>Image caption centered this way and I'll make this a bit longer <br>to indicate the amount of line-height. </span>
        </div>
        <br><br>
        <div>Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. <br><br>In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacauctor nisl et,              consequat ante. Donec sit amet nisi arcu. efficitur auctor metus, id mollis lorem             pellentesque id. Nposuere maximus dui et fringilla. Nulla non volutpat leo.</div>
        <br><br>
        <div>
            A list looks like this:
            <br>
            <li>First item in the list</li><br>
            <li>Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li><br>
            <li>Third item in the list</li>
        </div>
        <br><br>
        <div>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
        </div>
        <br><br>
        <div>Thanks for reading,<br> Mika</div>
    </div>
</template>

<script>
    
</script>

<style lang="scss" scoped>
    .post{
        &__content{
            font-family: New York;
            font-weight: 400;
            @include adaptiv-font(20, 16);
        }
        &__title{
            text-transform: uppercase;
            font-weight: 800;
        }
        &__img{
            margin: 10px 0px;
            img{
                width: 100%;
            }
        }
    }
</style>