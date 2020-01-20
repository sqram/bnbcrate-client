<template>
    
  <div>
     <header>
      <h3 class="display-1" >Select Your Crates</h3>
      <p>
        Select the quantity of each
        crate you'd like us to ship
      </p>  
    </header>

    <v-container grid-list-xl v-if='$store.state.products.crates.length'>     

      <v-layout row wrap>
        
        <!-- Left side - Crate Selection -->
        <v-flex xs12 sm8 md8 lg6 xl4 offset-lg1 offset-xl2>
          <v-container>
            <v-layout row wrap>
              <v-flex d-flex xs12 v-for="crate in $store.state.products.crates" :key='crate.name'>
                <v-card>                
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-img src='/img/products/filtered/img_1563.jpeg'></v-img> 
                    </v-flex>
                  </v-layout>

                  <!-- count -->
                  <v-layout class="crate-selection">
                    <v-flex xs4 md3>
                        <v-card-text>
                          <NumberInput :crate-name="crate.name" :crate-id='crate.id' :crate-price='crate.price' />
                        </v-card-text>
                    </v-flex>

                    <!-- description -->
                    <v-flex xs8 md9 class="crate-info">                
                    <v-card-text>
                      <span class="crate-name">{{ crate.name }} crate</span>
                      <small>
                        <span v-for="(item, k, i) in crate.items" :key='i'>
                          <span>{{item}}</span>
                          <!-- don't show last &mdash; -->
                          <span v-if="k+1 < Object.keys(crate.items).length">
                            &mdash;
                          </span>
                        </span>                     
                      </small>   
                    </v-card-text>                 
                  </v-flex>
                  </v-layout>
                  <v-layout class="crate-selection">                
                </v-layout>                            
                </v-card>
              </v-flex>

            
            </v-layout>
          </v-container>
        </v-flex>
               

        <!-- Right side -->
        <v-flex xs12 sm4  md4 lg4>
          <v-card class="grey lighten-2" dark>
            <v-card-text>
              <div class="order-summary">           
                <div class="price">
                  <span class="currency">$</span>{{ $store.getters['cart/cartTotal'] }}                  
                </div>              
                  <v-card-text>
                     <v-btn 
                      color='primary'  
                      light                 
                      block
                      large 
                      to="/checkout" 
                      :disabled="$store.getters['cart/cartTotal'] == 0">
                      OK, SHIP!
                    </v-btn>
                  </v-card-text>
                 
                 <v-card light flat class="text-sm-center grey--text">
                  ( Shipping is <b>FREE</b> )
                </v-card>                 
              </div>
              
            
            </v-card-text>
          </v-card>
        </v-flex>
    
      </v-layout>
    </v-container>

    <v-container v-else>
      <Loading />
    </v-container>

  </div>
</template>

<script>

import NumberInput from '~/components/NumberInput'
import Loading from '~/components/Loading'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css';



export default {
  layout: 'default',
  components: {
    NumberInput,
    Loading,
    Hooper,
    Slide,
    HooperNavigation,
    
  },
  data ()
  {
    return {
      hooperSettings: {
        vertical: true
      }
    }
  },
  async beforeMount ()
  {              

    // If we have 0 crates in cart, add `
    if (this.$store.state.cart.items.length == 0) {
      let crate = this.$store.state.products.crates[0]
      this.$store.commit('cart/UPDATE_CART_ITEM', { name: crate.name, quantity: 1, id: crate.id})
    }
  }  
}
</script>

<style lang='stylus'>
  .loading
    margin-top 6em !important
  .container.order-form
    margin-top 5em

  .crate-selection
    
    color #444 
    small
      //font-size 40%
      display block
      position relative
      line-height 20px
      color #777
      letter-spacing 0.5px
      span
        span:nth-of-type(even)
          color cadetblue
      @media $xs
        line-height inherit
        font-size 60%
        color #999
        
        
  div.crate-info
    margin-left 0.4em
    display inline-block
    vertical-align top
    .crate-name
      font-weight 
    @media $xs
      margin-left 84px
      font-size 24px
    
  .order-summary
    //background rgba(228, 227, 227, 0.2)
    background lighten(#fff, .63)
    padding 2em
    border-radius 10px
    color #666
    //color #fff
    .price
      font-size 4em
      text-align center
      margin 10px 0 30px
      //color $salmon
    .currency
      font-size 60%
      position relative 
      top -19px
    
    @media $xs
      padding 1em
      .price
        color inherit
        font-size 2.5em
        
        .currency
          font-size 50%
      
  // .premium
  //     margin-top 1em
  //     position relative
  //     p
  //       padding 9px 0
  //       color #ccc
  //     div.corner
  //       width 20px
  //       height 20px
  //       position absolute
  //       border-width 3px
  //       border-color gold
  //       border-style solid
  //       &.topleft
  //         top 0
  //         left 0
  //         border-right none
  //         border-bottom none
  //       &.topright
  //         top 0
  //         right 0
  //         border-left none
  //         border-bottom none
  //       &.bottomright
  //         bottom 0
  //         right 0
  //         border-left none
  //         border-top none
  //       &.bottomleft
  //         bottom 0
  //         left 0
  //         border-right none
  //         border-top none
</style>
