<template lang="html">
    <div class="container-fluid themdg">
        <h2>The Most Dangerous Game</h2>
        <div class="container-fluid">
            <h4>Overview</h4>
            <p>For this project I had two weeks to create a fully functional POC for a mobile AR game where friends hunt each other down in the real world using the geopositioning capabilities built into their cellular devices. My favorite part of this project was leveraging Socket.io for its realtime communication capabilites; this, combined with the phone's built in compass, is what allowed players to efficiently track their opponent's movements on a "radar" display.</p>
            <p>Using the MEAN stack to assemble the project as a web application was a quick and easy way to get things up and running. An extra advantage to this approach was that using Angular 2 with TypeScript, it would be easy to convert into a mobile app for either iOS or Android by using Cordova and the Ionic framework if it was desirable to move the project further forward.</p>
            <p>I had a lot of fun getting this app up and running while learning to make practical use of some new technologies like websockets and the location API. In the future it would be interesting to revisit this project; incorporating facial recognition features would be a major goal, while adding microtransactions for in-game "power-ups" could create a more exciting and varied gameplay experience.</p>
            <h4>Technologies and APIs</h4>
            <ul class="technologies">
                <li>Angular 2</li>
                <li>Git</li>
                <li>Node</li>
                <li>ExpressJS</li>
                <li>Mongoose</li>
                <li>MongoDB</li>
                <li>Webpack</li>
                <li>Socket.io</li>
                <li>Digital Ocean</li>
                <li>TypeScript</li>
                <li>ES6</li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'TheMDG'
    };

</script>

<style lang="css" scoped>

    .themdg > .container > p {
        display: block;
        margin: 24px 0 24px 0;
        clear: left;
    }

</style>
