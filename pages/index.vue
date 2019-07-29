<template>
  <div class="index">
    
  soon
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
      background url(http://www.modernbathroomvanities.com/prod_images_blowup/modern-bathroom-toilet-setting-A-3891.jpg)
      
      
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