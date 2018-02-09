<template lang="html">
  <div class="container-fluid">
    <h2>Round and Round: <span class="sub-title">with CSS Transforms</span></h2>
    <div class="container-fluid">
      <section>
        <h4>More than a great 80's song?</h4>
        <p>While 'Round and Round' may be one of the most recognized of singles by 80's hair band Ratt, that is not what this blog post is about. I am here to talk about CSS in 3D and how simple it can be for creating a great carousel display especially in the context of a modern front end framework.</p>
        <p><strong>Note: </strong>To keep the code here brief this demo is targeted at the Chrome browser, as such, it may not display correctly in all browsers. Always keep in mind different browser configurations, capabilities, and requirements when customizing your CSS.</p>
      </section>
      <section>
        <h4>The Backstory <span class="sub-title">(feel free to skip this and scroll to the good parts)</span></h4>
        <p>A while back I was asked to fix a client's carousel display on their homepage. The existing version was a bit janky, it sort of jumped around from side to side, the caption text didn't scale properly, overall it didn't present a smooth and professional experience. The client pointed me to <a href="https://www.livenation.com/">livenation.com's</a> homepage and said he wanted something like that.</p>
        <p>Given that incorporating animation functionality from a library such as jQuery or better yet Velocity was not an option for the project, I created a solution using basic transforms and dynamic class assignments. The application was built in AngularJS with SASS for styling, but this post will reference plain CSS and use Vue as the framework (since that's what built this site in). That being said, the concepts are easy enough to extrapolate (in fact easier in some cases) for other frameworks and CSS preprocessors if desired.</p>
      </section>
      <section>
        <h4>The Good Parts</h4>
        <p class="col-xs-12 col-sm-6">Okay, with the backstory behind us let's dive in. At its most basic, what we are going to create here is a container which displays five elements at a time with one in the center and two to either side moving progressively into the background. You'll notice I have added some classes with position names to start off, we'll be assigning them dynamically later to allow for movement but let's just get the basic positioning down for now.</p>
        <code class="col-xs-12 col-sm-6">
          <pre>
&lt;div class="container"&gt;
  &lt;div class="boxes far-left"&gt;&lt;/div&gt;
  &lt;div class="boxes left"&gt;&lt;/div&gt;
  &lt;div class="boxes center"&gt;&lt;/div&gt;
  &lt;div class="boxes right"&gt;&lt;/div&gt;
  &lt;div class="boxes far-right"&gt;&lt;/div&gt;
&lt;/div&gt;
          </pre>
        </code>
        <p class="col-xs-12">We'll add a bit of color and some borders to make it a bit more clear what is going on and we'll size everything to the viewport for simplicity but obviously you can adjust precise element size and positioning as needed for whatever project you are constructing. I have added <code>clear: both;</code> to our container to ensure a lack of conflicts with floating bootstrap elements.</p>
        <code>
          <pre>
.container {
  position: relative;
  height: 300px;
  clear: both;
  transform: perspective(200px)
}
.boxes {
  position: absolute;
  background-color: grey;
  border: 1px solid black;
  height: 300px;
  width: 400px;
}
.far-left {
  transform: translateX(-47vw) translateZ(-175px);
  z-index: 3;
}
.left {
  transform: translateX(-22vw) translateZ(-75px);
  z-index: 5;
}
.center {
  transform: translateX(0vw) translateZ(0px);
  z-index: 7;
}
.right {
  transform: translateX(22vw) translateZ(-75px);
  z-index: 5;
}
.far-right {
  transform: translateX(47vw) translateZ(-175px);
  z-index: 3;
}
          </pre>
        </code>
        <p class="col-xs-12">We have set a perspective on our container element to give a starting distance from the viewport from which to render our elements, then we will move our boxes along the X and Z axis to spread them out from either side of the center box. You can see below what this early stage looks like.</p>
        <static-demo></static-demo>
      </section>
      <section>
        <h4>What do we notice so far?</h4>
        <p class="col-xs-12">Okay, so we are a bit off center... but you'll notice that the grey boxes that remain visible on the screen are already positioned nicely relative to eachother, and their position reacts to the size of your viewport. If you resize your browser window you'll notice how they change position to accomodate the redefined space with pure CSS.</p>
        <p class="col-xs-12">Next we will deal with our centering problem, but first a quick explaination for those who may not see what the cause is. Our CSS is designed to translate the X coordinates of our elements based upon the center of the screen, but that is not how elements are drawn on the page, rather they are drawn by the browser starting at the top left corner of the element. Thus what we have done is drawn a box (the 'container') starting at the edge of the last relatively positioned div (or the screen), then drawn five more boxes (with the class 'boxes') also starting at that same left edge, then moved them to the left and right of that starting position using our position based classes.</p>
      </section>
      <section>
        <h4>Finding our Chi: <span class="sub-title">a.k.a. Getting Centered</span></h4>
        <p class="col-xs-12">Since our boxes are absolutely positioned and are thus being drawn from the left edge of the closest relatively positioned element, what we really need to center is the container. By giving it a 'width' property and setting <code>margin: 0 auto;</code> we can start drawing our boxes from the center of the screen rather than the left hand edge. For those of you who are paying close attention, I know what you are thinking, "But Adam, if we start drawing the boxes from the center, aren't we putting the left edge of the box in the center of the screen? Won't that still be crooked and ugly?" Yes astutue reader, you are correct. But as a wise man once told me, "When all else fails, throw a div at it!"</p>
        <p class="col-xs-12">If we add a wrapper around our boxes and position it half a box width to the left the whole thing will appear centered. Check the code below for the changes:</p>
<code class="col-xs-12 col-sm-6">
  <pre>
&lt;div class="container"&gt;
  &lt;div class="wrapper"&gt;
    &lt;div class="boxes far-left"&gt;&lt;/div&gt;
    &lt;div class="boxes left"&gt;&lt;/div&gt;
    &lt;div class="boxes center"&gt;&lt;/div&gt;
    &lt;div class="boxes right"&gt;&lt;/div&gt;
    &lt;div class="boxes far-right"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
  </pre>
</code>
<code class="col-xs-12 col-sm-6">
  <pre>
.container {
  position: relative;
  height: 300px;
  clear: both;
  width: 0px;
  margin: 0 auto;
  transform: perspective(200px);
}
.wrapper {
  margin-left: -200px;
}
  </pre>
</code>
<br>
        <centered-demo></centered-demo>
      </section>
      <section>
        <h4>Getting Dynamic</h4>
        <div class="col-xs-12 col-sm-6">
          <p>Great! Now that we've got the basics setup, we're just a touch of JS away from everything we've been waiting for. Since someday the goal here is to display images or other repeated elements full of data we'll want an array full of our items to display.</p>
          <p>The other thing we are going to want is a way to keep track of the position of the items within the carousel. To do this we'll set an empty array and quickly fill it with the indicies of our items. Thus in the example provided, <code>carouselIndicies</code> looks like this: <code>[0, 1, 2, 3, 4, 5]</code></p>
        </div>
<code class="col-xs-12 col-sm-6">
  <pre>
let items = [
  { name: 'item 1', color: 'blue' },
  { name: 'item 2', color: 'red' },
  { name: 'item 3', color: 'green' },
  { name: 'item 4', color: 'pink' },
  { name: 'item 5', color: 'yellow' },
  { name: 'item 6', color: 'orange' },
];
let carouselIndicies = [];
items.forEach((item, index) => carouselIndicies.push(index));
  </pre>
</code>
        <div class="col-xs-12">
          <p>Now we just need to loop over our items and dynamically assign our position classes. Then we'll create a small function to change the position of our carousel items when the user clicks in the appropriate place. For fun we can fill our boxes with a style binding to add some color. Using Vue as our framework it will look something like this: </p>
        </div>
<code class="col-xs-12 col-sm-6">
  <pre>
    &lt;div v-for="item in items"
      class="box"
      :key="item.name"
      :class="{
        'far-left': (index === carouselIndicies[0]),
        'left': (index === carouselIndicies[1]),
        'center': (index === carouselIndicies[2]),
        'right': (index === carouselIndicies[3]),
        'far-right': (index === carouselIndicies[4])
      }"
      :style="{'background-color': item.color}"
    &gt;
    &lt;/div&gt;
  </pre>
</code>
<code class="col-xs-12 col-sm-6">
  <pre>
function moveCarousel(direction) {
  if (direction === 'left') {
    carouselIndicies.unshift(this.carouselIndicies.pop());
  } else if (direction === 'right') {
    carouselIndicies.push(this.carouselIndicies.shift());
  }
}
  </pre>
</code>

        <div class="col-xs-12">
          <p> <strong>Note: </strong>There are a few ways of doing this, and in a production environment you will want to consider things such as ensuring everything displays nicely if there are fewer than five items (amongst other things), but for the sake of brevity we will simplify our example and make the assumption of the data in front of us.</p>
        </div>
      </section>
      <section>
        <div class="col-xs-12">
          <h4>The Final Countdown</h4>
          <div class="col-xs-12 col-sm-6">
            <p>We will wrap the whole package (including the div with class 'container') in another div adding fill color to the background. We add a negative z-index to our boxes by default so that those not currently being displayed by our position classes will be hidden behind our background-color.</p>
            <p>Lastly we add some transition properties to our box class to make things a bit smoother when moving elements around, and throw a couple of buttons underneath with click listeners attached for our <code>moveCarousel</code> function.</p>
            <p><strong>Note: </strong>I have re-written our <code>translateX</code> and <code>translateZ</code> as <code>translate3d</code> to save space. The effect is the same, we simply provide the X, Y, and Z translations separated by commas in the parenthesis. The relevant classes should now resemble this: </p>
          </div>
<code class="col-xs-12 col-sm-6">
  <pre>
.carousel-component {
  /* This is our outer div */
  width: 100%;
  background-color: #eee;
  margin-bottom: 50px;
}
.box {
  position: absolute;
  border: 1px solid black;
  height: 300px;
  width: 400px;
  z-index: -1;
  transition: transform 0.5s ease, z-index 0.2s linear;
  transform: translate3d(0px, 0px, -275px);
}
  </pre>
</code>
          <div class="col-xs-12">
            <h4>Our Finished Product:</h4>
            <p class="col-xs-12">Our demo here works pretty well. It transitions smoothly, and automatically adjusts to screen resize. With these basic steps it is possible to adjust the concept to a variety of situations and layouts.</p>
          </div>
          <full-demo></full-demo>
        </div>
      </section>
      <div class="divider col-xs-12"></div>
      <section>
        <div class="col-xs-12">
          <h4>A Few Things to Remember</h4>
          <div class="col-xs-12">
            <p>
              Be careful when using a timeout for automatic carousel movement, be sure to reset the timeout when the user clicks one of the arrows. Otherwise your user may transition the carousel only to have your timeout immediately move it again. At the time of writing, <a href="livenation.com">livenation.com</a> still has not resolved the setTimeout issue on their homepage carousel so if you play around with it a bit you'll find that occasionally it will jump unexpectedly.
            </p>
            <p>
              You can find the source code for the completed demo-component on my GitHub account: <a href="https://github.com/foxinatardis/vue-carousel-demo">Vue Carousel Demo</a>. Feel free to download it and play around with it if you want.
            </p>
            <p>
              If you want a great resource on some other things you can do with 3D CSS transforms, check out the work by <a href="https://desandro.github.io/3dtransforms/docs/introduction.html">David DeSandro</a>. He's got some neat stuff up there that is really fun to play with.
            </p>
            <p>
              For the sake of brevity and saving time in writing this post, I have made some compromises in browser compatability and precise execution of the CSS. Be sure to test your code in different environments when using these examples as a starting point. The resource above can be a great next step, also <a href="google.com">Google</a>, and <a href="stackoverflow.com">StackOverflow</a> are your friends.
            </p>
            <p>
              If you want to have some real fun with moving elements around the page I highly recommend <a href="http://velocityjs.org/">VelocityJS</a>.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div class="col-xs-12">
          <h5>Posted By: Adam Belliveau</h5>
          <h5>Feb. 8, 2017</h5>
          <h6>Any questions or comments? Contact me at <a href="mailto:abellive@me.com">abellive@me.com</a></h6>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import StaticDemo from './components/static-demo.vue'
import CenteredDemo from './components/centered-demo.vue'
import FullDemo from './components/full-demo.vue'
export default {
  components: {
    StaticDemo,
    CenteredDemo,
    FullDemo
  },
  data () {
    return {
      items: [
        {name: 'far-left', color: 'blue', text: 'FooBar'},
        {name: 'left', color: 'green'},
        {name: 'center', color: 'red'},
        {name: 'right', color: 'violet'},
        {name: 'far-right', color: 'cyan'},
        {name: '', color: 'darkslategray'}
      ]
    }
  }
}
</script>

<style lang="css">
  code {
    margin-bottom: 20px;
    background-color: inherit;
  }
  /*.parents {
    height: 300px;
    width: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }*/
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
    margin-top: 20px;
    font-weight: bold;
  }
</style>
