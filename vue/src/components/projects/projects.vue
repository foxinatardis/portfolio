<template lang="html">
    <div>
        <div class="jumbotron">
            <div class="container-fluid">
            </div>
        </div>
        <div class="projects">
            <transition name="fade" mode="out-in">
                <router-view class="content"/>
            </transition>
        </div>
    </div>
</template>

<script>

    export default {};

</script>

<style scoped lang="postcss">

    >>> .jumbotron {
        background: url('/static/intro_pics/web-development.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    >>> strong {
        font-size: 1.05em;
    }

    .projects {

        >>> .technologies {
            margin-left: -2em;

            &::after {
                content: " ";
                display: block;
                height: 0;
                clear: both;
            }
            li {
                display: block;
                float: left;
                background-color: #333;
                color: #eee;
                padding: 5px;
                margin: 5px;
            }
        }
        >>> .mag-left-10 {
            margin-left: 10px;
        }
    }





</style>
