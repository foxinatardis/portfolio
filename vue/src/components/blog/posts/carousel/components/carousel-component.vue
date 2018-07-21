<template lang="html">
    <div class="carousel-component">
        <div class="carousel-wrapper">
            <div class="inner-wrapper">
                <div v-for="(item, index) in items" :key="index">
                    <div class="item" v-bind:class="{
                        'far-left': (index === displayIndicies[0]),
                        'left': (index === displayIndicies[1]),
                        'center': (index === displayIndicies[2]),
                        'right': (index === displayIndicies[3]),
                        'far-right': (index === displayIndicies[4])
                        }">
                        <slot v-bind="item"></slot>
                    </div>
                </div>
            </div>
        </div>

        <div class="button-wrapper">
            <div class="left-clicker carousel-btn" v-on:click="moveCarousel('left')">
                <i class="fa fa-chevron-circle-left"></i>
            </div>
            <div class="right-clicker carousel-btn" v-on:click="moveCarousel('right')">
                <i class="fa fa-chevron-circle-right"></i>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: [
            'items'
        ],
        data () {
            return {
                displayIndicies: []
            };
        },
        created () {
            for (let i = 0; i < this.items.length; i++) {
                this.displayIndicies.push(i);
            }
        },
        methods: {
            moveCarousel (direction) {
                if (direction === 'left') {
                    this.displayIndicies.unshift(this.displayIndicies.pop());
                } else if (direction === 'right') {
                    this.displayIndicies.push(this.displayIndicies.shift());
                }
            }
        }
    };

</script>

<style lang="css">

    .carousel-wrapper {
        position: relative;
        text-align: center;
    }
    .inner-wrapper {
        display: inline-block;
        margin-left: -500px;
    }
    .item {
        position: absolute;
        perspective-origin: center;
        z-index: -1;
        transition: transform 0.5s ease, z-index 0.2s linear;
        transform: perspective(200px) translateZ(-275px);
    }
    .far-left {
        transform: perspective(200px) translateZ(-175px) translateX(-47vw);
        z-index: 3;
    }
    .left {
        transform: perspective(200px) translateZ(-75px) translateX(-22vw);
        z-index: 5;
    }
    .center {
        transform: perspective(200px) translateZ(0px) translateX(0vw);
        z-index: 7;
    }
    .right {
        transform: perspective(200px) translateZ(-75px) translateX(22vw);
        z-index: 5;
    }
    .far-right {
        transform: perspective(200px) translateZ(-175px) translateX(47vw);
        z-index: 3;
    }
    .carousel-component {
        height: 300px;
        width: 100%;
        background-color: #eee;
    }
    .button-wrapper {
        margin: 300px;
        margin-left: 50vw;
        position: relative;
    }
    .carousel-btn {
        position: absolute;
        text-align: center;
        font-size: 50px;
        line-height: 50px;
        cursor: pointer;
    }
    .left-clicker {
        left: -75px;
    }
    .right-clicker {
        left: 25px;
    }

</style>
