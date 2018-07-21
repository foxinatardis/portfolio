<template lang="html">
    <div class="container-fluid safety-net">
        <h2>Safety Net</h2>
        <div class="container-fluid">
            <h4>Overview:</h4>
            <p>Safety Net is an Android App available in the Google Play Store. A utility designed to help alleviate fear in dangerous situations, a user can set a countdown timer which will send a googlemaps link of their location to selected contacts when expired.</p>
            <p>If you have to walk through a "sketchy neighborhood" you can use the app to call for help in a sitaution where you would otherwise be unable to do so. If you make it to your destination safely you stop the countdown, but if something happens along the way then a custom text will be sent to your friends on your behalf.</p>
            <p>Safety Net is an open source project hosted in a <a href="https://github.com/foxinatardis/Safety-Net">GitHub Repository</a>. Built using Ionic 2 to transpile Angular 2 with TypeScript for Android devices, Cordova plugins provide the native device functionality required for accessing contacts, geolocation, and SMS services.</p>
            <h4>The Why's of Safety Net</h4>
            <p><strong>Why is it free?</strong> Because the world could use a bit less fear. Safety Net is free to download, free to use, and free of advertisements. People should not profit from fear.</p>
            <p><strong>Why is it open source?</strong> Because I'm not perfect, and I'm certainly not a graphic designer. If anyone has improvments to functionality or style that they would like to submit, I would be more than happy to include them in this project.</p>
            <h4>Technologies and APIs</h4>
            <ul class="technologies">
                <li>Angular 2</li>
                <li>TypeScript</li>
                <li>Ionic 2</li>
                <li>Cordova</li>
                <li>Geolocation</li>
          </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'SafetyNet'
    };

</script>

<style lang="css" scoped>
</style>
