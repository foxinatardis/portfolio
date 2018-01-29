<template lang="html">
  <div class="container-fluid festpass">
    <h2>Festpass.com</h2>
    <div class="container-fluid mag-left-10">
        <h4>Overview:</h4>
        <p>I spent a year building up this application under contract to Buink Web Development. What we created in that time is a three tiered application including:</p>
        <ol>
            <li>A custom content management system where creators can upload content to be bundled and sold by labels and fests.</li>
            <li>A video-on-demand platform where users preview and consume purchased content.</li>
            <li>A custom sales platform tying things together to ensure users have proper access to content, and that creators and labels get paid appropriately.</li>
        </ol>
        <p>I joined the team in January of 2017 when the project was reaching the final months of its proof-of-concept phase. During this time I had the pleasure of adding additional features to the CMS, integrating the Brightcove video player, building the video security system, and creating a custom database seeding program to expedite development and testing.</p>
        <p>Once our POC was completed I was able to do a deep dive into the pre-existing codebase tracking down memory leaks, trimming down unneccessary APIs, and refactoring endpoints and database queries to improve the efficiency, and scalability of our backend. After a few more features were fleshed out, it was time to finish things off with some cutting edge CSS to create a unique and responsive interface.</p>
        <p>By the end of the year, the user experience had been polished and beta content was being uploaded to the live site in preparation for full launch. Overall the project was a great experience and I really enjoyed the opportunity to work with some great people over at Buink writing clean, maintainable code.</p>
        <h4>Technologies and APIs</h4>
        <ul class="technologies">
            <li>MeanJS</li>
            <li>Git</li>
            <li>Node</li>
            <li>Docker</li>
            <li>Amazon S3</li>
            <li>AngularJS</li>
            <li>Twitter Bootstrap</li>
            <li>ExpressJS</li>
            <li>Mongoose</li>
            <li>DB-Migrate</li>
            <li>Angular-UI</li>
            <li>Bitbucket</li>
            <li>PayPal</li>
            <li>VideoJS</li>
            <li>Brightcove</li>
            <li>Gulp</li>
            <li>SASS</li>
            <li>TinyPNG</li>
            <li>Mailchimp</li>
            <li>Sendgrid</li>
            <li>Lodash</li>
            <li>Passport</li>
            <li>Evaporate</li>
            <li>jQuery</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
  name: 'festpass'
}
</script>

<style scoped lang="css">
  .festpass > .container > p {
      margin: 24px 0 24px 0;
  }

  .festpass li {
      margin-top: 5px;
  }
</style>
