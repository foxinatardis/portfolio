<template lang="html">
  <div class="">
    <div class="well col-xs-12 col-sm-10 col-sm-offset-1">
      <h3>Droplet Overload</h3>
      <img src="/static/images/droplet.jpg" alt="code" class="img-responsive col-xs-12 col-sm-8"/>
      <div class="image-spacer visible-xs col-xs-12">
      </div>
      <p>I recently built a small NPM package to get the most out of my DigitalOcean Droplet in an easily maintainable way. A simple piece of ExpressJS middleware allows me to host multiple domains, like this one, off of a single VPS all with JavaScript. Managing ports and subdomains is a breeze with a simple JSON config file.</p>
      <h3 class="pull-right"><router-link :to="{ path: '/blog/posts/traffic-circle' }">Read More  &gt;&gt;</router-link></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrafficCircleSummary'
}
</script>

<style lang="css">
</style>
