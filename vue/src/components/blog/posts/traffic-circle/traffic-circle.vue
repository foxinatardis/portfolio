<template lang="html">
  <div class="container-fluid">
      <h2>Overload Your Droplet: <span class="sub-title">With <a href="https://www.npmjs.com/package/traffic-circle">Traffic-Circle</a></span></h2>
      <div class="container-fluid">
        <section>
          <div class="row">
            <div class="col-xs-12">
              <h4>So Many Domains!</h4>
              <div class="col-xs-12">
                <p>I have aquired a few domains over the past couple of years for various purposes, and they are usually used for silly things like this website. Now I obviously have no need to use multiple servers for the purpose of hosting these various domains, that would just be throwing money out the window given how much traffic they receive.</p>
                <p>Realistically my $10/month Droplet from Digital Ocean is far more than I need to host a portfolio site, a video-game for my niece, and whatever random apps I may be building on any given day. So I needed a solution to make the most of those available resources.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="row">
            <div class="col-xs-12">
              <h4>The First Answer</h4>
              <div class="col-xs-12">
                <p>My initial solution to the problem was to quickly setup a hacked together solution using the http-proxy package found on NPM. It looked something like this:</p>
                <code>
                  <pre>
var httpProxy = require("http-proxy");
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://localhost:9001';
var serverTwo = 'http://localhost:9002';

const PORT = process.env.PORT || 8000;

app.use((req, res, next) => {
  if (req.hostname.includes("adamb")) {
    apiProxy.web(req, res, {target: serverOne});
    return;
  } else if(req.hostname.includes("otherdomainname")) {
    apiProxy.web(req, res, {target: serverTwo});
    return;
  } else {
    next()
  }
});</pre>
                </code>
                <p>This solution works, and I basically lifted straight from the <a href="https://codeforgeek.com/2015/12/reverse-proxy-using-expressjs/">this post</a> with minor modifications since I was in a hurry to get my niece's present online before Christmas. But you can see it is not very extensible, difficult to maintain, hard to read, feature lacking, etc. As I said, a quick hacked-together solution that got the job done.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="row">
            <div class="col-xs-12">
              <h4>There Has To Be A Better Way</h4>
              <div class="col-xs-12">
                <p>Well, fast-forward a year and that same reverse proxy server has been serving my needs without fail. But when I recently rebuilt this site in Vue, I decided I should do something to make it easier to manage various domain names while leaving things open enough to quickly launch apps and APIs for testing.</p>
                <p>Thus, I expanded on the original idea and created a wrapper around it which allows me to manage domains and subdomains in an easily configured JSON document. Here is an example of what such a document would look like:</p>
                <code>
                  <pre>
{
  "location": "http://127.0.0.1", // this is the default address we will route requests to
  "domains": {
    "example.com": {
      "port": 9001
    },
    "other.site": {
      "port": 9002
    }
  }
}</pre>
                </code>
                <p>This forms the basis of how we can eaily manage our varying domains, and it also provides a handy reference for which port we are running our various apps on.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="row">
            <div class="col-xs-12">
              <h4>Putting It Together</h4>
              <div class="col-xs-12">
                <p>Okay, so we've seen what the options look like, but how do we use it? Simple as any other express middleware. Clone it from <a href="https://github.com/foxinatardis/traffic-circle">github</a>, or install with <code>npm install traffic-circle</code> and include it in an express app.</p>
                <p>Then you can pass in your options directly from an object literal or config file when calling the constructor and use the middleware function <code>domainHandler</code>.</p>
                <p>Any requests not caught by our domainHandler function will fall through and be sent a 404, or we can easily add quick route handlers below the middleware for any other requests we may need to test or handle temporarily in the day to day work.</p>
                <p>This allows me to quickly and easily add routes for testing API callbacks without having to spin up a whole new droplet just for the purpose. I can just add a route here and do a quick restart of this tiny express app with minimal impact to the sites I am hosting.</p>
              </div>
              <code class="col-xs-8 offset-2">
                <pre>
const app = require('express')();
const CONFIG = require('./domains.config.json');
const TrafficCircle = require('traffic-circle');
const tc = new TrafficCircle(CONFIG);

app.use(tc.domainHandler);

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/404Error.html');
});

app.listen(process.env.PORT || 8000);</pre>
              </code>
            </div>
          </div>
        </section>
        <section>
          <div class="row">
            <div class="col-xs-12">
              <h4>What About Subdomains?</h4>
              <div class="col-xs-12 col-md-7">
                <p>The basic example above is great for getting started, but if we want to add a subdomain to our site that is running off a different port we can make that pretty simple too. All we need to do is add a subdomain field with a specified port.</p>
                <p>The subdomains option is nestable to handle all the subdomains of your subdomains. Additionally if you want any subdomains of the current domain level to be served by the same location and port rather than falling through the middleware just add a subdomains option with "catchall" set to true.</p>
              </div>
              <code class="col-xs-12 col-md-5">
                <pre>
"domains": {
  "example.com": {
    "port": 9001,
    "subdomains": {
      "blog": {
        "port": 9090
      }
    }
  }
}</pre>
              </code>
            </div>
          </div>
        </section>
        <section>
          <div class="row">
            <div class="col-xs-12">
              <h4>But I Have Heavy Calculations To Run</h4>
              <div class="col-xs-12 col-md-7">
                <p>Need to send off compute heavy requests to another server with more memory or processor power behind it? Any domain or subdomain takes a "location" option which will override the default or parent location.</p>
                <p>Now you can keep the small server here for the main requst handling and only spin up the heavier firepower when needed. In this example we will route the subdomain "api" and any of the subdomains it has to another location.</p>
                <p>Now requests for *.api.example.com are handled by a server found at 45.45.45.15:80 and you can see the catchall option in action on this site. Any number of subdomains can be added in front of "adamb.me" and they will all direct you to the same page. This can be useful if you want to manage subdomains in a separate application as would be the case for api.example.com and its compute heavy tasks.</p>
              </div>
              <code class="col-xs-12 col-md-5">
                <pre>
"domains": {
  "example.com": {
    "port": 9001,
    "subdomains": {
      "api": {
        "location": "http://45.45.45.15",
        "port": 80,
        "subdomains": {
          "catchall": true
        }
      }
    }
  }
}</pre>
              </code>
            </div>
          </div>
        </section>
        <section>
          <div class="row">
            <div class="col-xs-12">
              <h4>Limitations</h4>
              <div class="col-xs-12">
                  <p>For now it is only setup to handle http requests, and no, I would not recommend you use it for running your client's e-store in a production environment. But while there are improvements I look forward to making to it, for now it is a quick and light domain parser and if you have a use for it you too can find it on npm here: <a href="https://www.npmjs.com/package/traffic-circle">"traffic-circle"</a> or on my github account at <a href="https://github.com/foxinatardis/traffic-circle">foxinatardis/traffic-circle.</a></p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h5> Posted By: Adam Belliveau</h5>
          <h5>Jan. 20, 2018</h5>
          <p>Any questions or comments? Contact me at <a href="mailto:abellive@me.com">abellive@me.com</a></p>
        </section>
      </div>
  </div>
</template>

<script>

    export default {
        name: 'TrafficCircle'
    };

</script>

<style lang="css" scoped>

    code {
        padding: 0px 15px;
    }
    pre {
        margin: 0px 20px;
    }
    .sub-title {
        font-size: 0.8em;
    }
    section {
        margin: 25px 0;
    }
    h4 {
        font-weight: bold;
    }

</style>
