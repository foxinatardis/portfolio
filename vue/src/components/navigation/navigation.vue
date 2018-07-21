<template>
    <div>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#adams-navbar-collapse" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link :to="{ name: 'About' }" class="navbar-brand">A. Belliveau</router-link>
                </div>
                <div class="collapse navbar-collapse" id="adams-navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><router-link :to="{ name: 'About' }">About</router-link></li>
                        <li class="dropdown">
                            <router-link :to="{ name: 'BlogHome' }">Blog</router-link>
                        </li>
                        <li class="dropdown">
                            <a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Projects <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><router-link :to="{ path: '/projects/festpass' }">Festpass.com</router-link></li>
                                <li><router-link :to="{ path: '/projects/themdg' }">The Most Dangerous Game</router-link></li>
                                <li><router-link :to="{ path: '/projects/safety-net' }">Safety Net</router-link></li>
                                <li><router-link :to="{ path: '/projects/gwendolyn' }">Gwendolyn the Rabbit</router-link></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Interests <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><router-link :to="{ path: '/interests/rock-climbing' }">Rock Climbing</router-link></li>
                                <li><router-link :to="{ path: '/interests/mountain-biking' }">Mountain Biking</router-link></li>
                                <li><router-link :to="{ path: '/interests/adventure-photography' }">Adventure Photography</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="nav-spacer">
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Navigation'
    };

</script>

<style>

    .nav-spacer {
        height: 50px;
        clear: both;
    }

</style>
