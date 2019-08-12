<template>
  <div class="index">
    
  
    <v-layout  align-center class="hero">       
      <v-flex xs10 sm5 md7 lg5 align-self-center>
        <v-card flat tile class="transparent">
          <v-layout column class="header">
            <v-flex tile>
              <h2>bnbcrate</h2>
            </v-flex>
            <v-flex>
              <v-card tile>
                <h3>
                  The simplest, easiest, and most beautiful way to provide your guests
                  with quality toiletries.
                </h3>
              </v-card>
            </v-flex>
            <v-flex align-self-center tile>
              <v-btn  to='/crates' tile large class='primary'>SHIP A CRATE</v-btn>    
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>        
    </v-layout>
    
    

    
    <v-container class='features' grid-list-xl>     
      <v-layout row wrap>
      <v-flex xs12 md4>
        <v-card dark class="primary">
          <v-card-text>
            <h5>Beautifully Packed</h5>
            <p>
              Impress each guest by letting them arrive to <b>beautifully and carefully 
                packed toiletries</b> &mdash; creating a clean &amp; warm welcome.
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md4>
        <v-card>
          <v-card-text>
            <h5>Delightfully Simple</h5>
            <p>
              <!-- We offer 2 crates. <b>Select the quantity of each
              crate</b> and we'll deliver them to you or one of your
              properties. -->
              Simply select the quantity of crates you want us to ship.
              You can also create an account to save shipping addresses for quicker checkouts
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md4>
        <v-card dark class="primary">
          <v-card-text>
            <h5>Earth Friendly</h5>
            <p>
              Our items are <b>biodegradable</b>, so that they
              won't be a burden on the planet if they don't
              end up in the recycle bin.
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
      </v-layout>
    </v-container>
    
  </div>
</template>

<style lang='stylus'>  

  // http://rexadesign.it/it/collections
  div.index
    .transparent
      background none
    .hero
      height 60vh
      justify-content center 
      font-family sans-serif
      //background url(http://cdn.home-designing.com/wp-content/uploads/2012/12/Modern-bathroom-with-large-windows.jpg)
      //background url(https://myhomemyfuture.com/wp-content/uploads/2017/07/modern_vanity_bathroom.jpg)
      
      //background url(http://www.hooperprojects.com/wp-content/uploads/black-and-white-bathroom-shower-curtain-toto-toilet-on-cozy-parkay-floor-small-round-wash-basins-for-modern-gray-wall-color-mirror-pendant-lamps-vanity-set-ikea.jpg)
      //background url(https://i.ytimg.com/vi/MTJWAOnGtO8/maxresdefault.jpg)
      //background url(http://img.archiexpo.com/images_ae/photo-g/66916-11562379.jpg)
      background url('/img/hero/bathroom3.jpg')
      
      
      background-size 100% 150%
      padding auto 1em
    
    
    .header
      & > .flex
        margin 7px 0

        &:first-of-type
          background alpha(white, 49%)

      h2
        //text-shadow 1px 1px 0 alpha(black, 70%)
        text-shadow 1px 1px 0 alpha(white, 70%)
        width 100%
        font-size 2.5em
        padding 0.4em
        text-align center
        color $darkblue
      h3
        padding 1em
        font-size 1.2em
        text-shadow none
        color $darkblue
        font-weight 400
        text-align center
    h5
      font-size 1.2em
      margin-bottom 0.7em
    
    // Blue boxes under hero - give them white text
    .primary > .v-card__text
      color #fff

    @media (max-width: 600px)
      .subheader
        h3
          font-size 100%

</style>