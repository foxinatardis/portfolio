<template lang="html">
  <div class="container adventure-photography">
    <h2>Adventure Photography</h2>
    <div class="container">
        <div class="row">
          <div v-for="image in images" class="col-xs-6 col-md-3">
            <thumbnail :image="image"></thumbnail>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Photography',
  data () {
    return {
      images: [
        {
          source: '/static/portfolio_pics/tinified/lynette-bocan-quarter-size.jpg',
          thumbnail: '/static/portfolio_pics/tinified/lynette-bocan-quarter-size.jpg',
          alt: 'Lynette Climbing',
          title: 'Lynette Ashley',
          caption: 'Lynette is shown here climbing at the Dance Hall of the Dead in the St.Vrain canyon Lyons, CO.'
        },
        {
          source: '/static/portfolio_pics/tinified/jonny-stars-quarter-size.jpg',
          thumbnail: '/static/portfolio_pics/tinified/jonny-stars-thumbnail.jpg',
          alt: 'Milky Way',
          title: 'Milky Way',
          caption: 'With my adventure van parked in the Badlands National Park for the 2015 Astronomy festival, this picture captures the Milky Way in all its glory.'
        },
        {
          source: '/static/portfolio_pics/tinified/snow-field-quarter-size.jpg',
          thumbnail: '/static/portfolio_pics/tinified/snow-field-thumbnail.jpg',
          alt: 'Glacier Travel',
          title: 'Middle Teton',
          caption: 'An old friends makes her way up a snow field on the way to summiting Middle Teton.'
        },
        {
          source: '/static/portfolio_pics/tinified/scout-rock-quarter-size.jpg',
          thumbnail: '/static/portfolio_pics/tinified/scout-rock-quarter-size.jpg',
          alt: 'Scout Rock',
          title: 'Two Climbers at Scout Rock',
          caption: 'On the left side of the image you can see a solo aid climber working her way up a route, while on the right side another climber thrutches his way up a difficult chimney.'
        },
        {
          source: '/static/portfolio_pics/tinified/mike-climbing-quarter-size.jpg',
          thumbnail: '/static/portfolio_pics/tinified/mike-climbing-quarter-size.jpg',
          alt: 'Mike Climbing',
          title: 'Mike Olsen',
          caption: 'Mike is shown here making his way up Greatful Head at the Dance Hall of the Dead in Lyons, CO.'
        },
        {
          source: '/static/portfolio_pics/tinified/drought-full.jpg',
          thumbnail: '/static/portfolio_pics/tinified/drought-quarter-size.jpg',
          alt: 'California Drought Picture',
          title: 'California Drought',
          caption: 'Taken in the summer of 2015 this picture illustrates how important water is to the nourishment of life.'
        },
        {
          source: '/static/portfolio_pics/tinified/elCap-quarter-size.jpg',
          thumbnail: '/static/portfolio_pics/tinified/elCap-quarter-size.jpg',
          alt: 'El Capitan and Half Dome',
          title: 'Two Icons',
          caption: 'El Capitan and Half Dome standing tall, the two icons of Yosemite Valley.'
        },
        {
          source: '/static/portfolio_pics/tinified/bouldering-quarter-size.jpg',
          thumbnail: '/static/portfolio_pics/tinified/bouldering-quarter-size.jpg',
          alt: 'Bouldering in the winter',
          title: 'Winter Bouldering',
          caption: 'Winter is no reason to stop climbing in Boulder, CO.'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
  .adventure-photography h2 {
    margin-bottom: 30px;
  }
</style>
