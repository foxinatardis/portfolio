<template lang="html">
    <div class="container-fluid gwendolyn">
        <h2>Gwendolyn the Rabbit</h2>
        <div class="container-fluid">
            <h4>Overview:</h4>
            <p><a href="http://gwendolyn.win">Gwendolyn the Rabbit</a> is an infinite scroller game. Play as a rabbit jumping from ledge to ledge, stomping on snowmen, and eating carrots to earn points. The more carrots you eat, the faster the game goes.</p>
            <p>I built the game as a Christmas present for my niece, but I had a great time learning the <a href="http://phaser.io" target="_blank">Phaser</a> engine in the process and I got to play around with Adobe Illustrator for the first time to create the sprites for the game. One of the great things about Phaser is that it has a plethora of built in capabilites for managing physics, finding the right balance of gravitational constants and friction coefficients took longer than it should have because testing out the various combinations proved to be highly entertaining.</p>
            <p>Something I found particularly interesting was tracking particles. Every snowflake falling in the game is an individually tracked particle which adheres to the physics of the game. This approach is really not the most efficient way of creating the effect of snowfall, but I was facinated by the concept. It also gave me the opportunity to practice destroying objects when they are no longer necessary.</p>
            <p>While it is true of all objects on the screen, I needed to take extra care that each snowflake would clean up after itself when leaving the player's view. Since there is so much snow created during gameplay, performance will quickly degrade if the objects are not slated for garbage collection once they are off screen.</p>
            <h4>Technologies and APIs</h4>
            <ul class="technologies">
                <li>Phaser</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>Twitter Bootstrap</li>
                <li>Git</li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Gwendolyn'
    };

</script>

<style lang="css">
</style>
