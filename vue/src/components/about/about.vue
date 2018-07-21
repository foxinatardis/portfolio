<template>
  <div>
    <div class="jumbotron">
      <div class="container-fluid">
          <h1 class="header">Adam Belliveau</h1>
          <h2 class="header">Web Developer</h2>
          <div class="header">
              <a href="https://github.com/foxinatardis" target="_blank" class="header icon-link"><i class="fa fa-github" aria-hidden="true"></i></a>
              <a href="mailto:abellive@me.com" class="header icon-link"><i class="fa fa-envelope" aria-hidden="true"></i></a>
              <a href="https://linkedin.com/in/adam-belliveau" target="_blank" class="header icon-link"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
          </div>
      </div>
    </div>
    <div class="container content">
      <div class="col-xs-12 col-sm-6">
        <h2>About Adam</h2>
        <div class="indent">
          <p>Adam is a professional Web Developer working primarily in JavaScript based technologies. He is constantly building his skillset and searching for new ways to solve problems with software. In addition to his hobbies of rock climbing, mountain biking, and programming, he serves as part of the admin team for the Boulder based meetup group <a href="http://www.devfaction.com">DevFaction</a> where developers, designers, and UI/UX pros meet, mingle, and create.</p>
        </div>
        <h3>A bit of history</h3>
        <div class="indent">
          <p>The child of a software engineer, Adam first tried to learn code at the age of 12 from a book on C. Childish impatience and the hunt for misplaced semi-colons combined to frighten him away from the activity for a number of years. His love for technology was then limited to building computers and helping his friends with various technical problems.</p>
          <p>After spending half a decade working in Human Services as a counselor for traumatized teens, Adam decided it was time for a change. After some soul searching, and a 3-month journey across country in a 94 Chevy, he decided to take his love of logic and problem solving on a head first dive into the world of software development.</p>
          <p>He hasn't looked back since.</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 picture-holder">
        <img src="/static/intro_pics/brand-square.png" alt="" class="circle">
        <p class="caption">
            &quot;Front End to Back End <br>If it doesn't work for the user, <br>It doesn't work for me.&quot;
        </p>
      </div>
    </div>

  </div>
</template>

<script>

    export default {
        name: 'About',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            };
        }
    };

</script>

<style scoped>

    .jumbotron {
        background: url('/static/intro_pics/mountain-biking.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    img.circle {
        border-radius: 100%;
        margin: auto;
        width: 100%;
    }

    .caption {
        text-align: center;
        margin-top: 10px;
    }

    .picture-holder {
        margin-top: 20px;
        padding: 0 7%;
    }

    .indent {
        padding: 5px 10px;
    }

    .icon-link {
        font-size: 3em;
        display: inline-block;
        margin: 0 10px;
    }

    .icon-link:hover {
        color: #39f;
    }

    .header {
        text-align: center;
        color: #333;
    }

</style>
