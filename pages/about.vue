<template>

  <v-container class="container">          
    
      <header>
        <h3 class="display-1">What is bnbcrate?</h3>          
      </header>    
      
      <v-layout class="about">
        <v-flex xs12  lg8 offset-lg2>

          <v-card dark class="primary center">
            <v-card-text>
              bnbcrate compliments your guest's stay by shipping
              personalized crates of toiletries.
            </v-card-text>
          </v-card>

          <v-img src='/img/hero/bathroom7.jpg'></v-img>
          <!-- <v-img src='http://images.traditionalhome.mdpcdn.com/sites/traditionalhome.com/files/slide/101982719.jpg'></v-img> -->
          <!-- <hooper>
            <slide>
              <img width='100%' height='100%' src="http://images.traditionalhome.mdpcdn.com/sites/traditionalhome.com/files/slide/101982719.jpg" alt="">
              <!-- <v-img src='http://images.traditionalhome.mdpcdn.com/sites/traditionalhome.com/files/slide/101982719.jpg'></v-img> -->
           <!--
            <slide>                        
              <v-img src='/img/products/filtered/img_1563.jpeg'></v-img> 
            </slide>
            <slide>
              <v-img src='/img/products/filtered/img_1587.jpeg'></v-img> 
            </slide>
            <slide>
              <v-img src='/img/products/filtered/img_1592.jpeg'></v-img> 
            </slide>
            <slide>
              <v-img src='/img/products/filtered/img_1588.jpeg'></v-img> 
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
          </hooper>          -->
          
    
          <v-card-text>
            <p>
              As a rental host, it is important that your guests feel welcomed.<br>
              They've given you 
              their money, and trust that you'll do your best to make their stay as pleasant as possible.
              <br>
              <b>A clean place with unused toiletries is one way to achieve that.</b>
            </p>
            <p>
              With Bread and Breakfast (BnB) services gaining popularity, <b>our goal is to let 
              you give your guests the same warm, clean, and hygienic feeling
              they get when they stay at an upscale hotel</b>, by providing them with a crate of 
              brand new, fresh, unused, toiletries.
            </p>            
          </v-card-text>        
          
        
          <v-card-text>
            <p>
              We ship fresh soaps, shampoos, conditioners, shower caps, and other items &mdash; 
              directly to your property, in a neatly packed crate.
            </p>
            <p>
              If you provide your guest's name during checkout, we'll engrave their name 
              on the crate, free of charge. 
            </p>
            <p>
              <b>Make a small gesture to impress your guests, and good ratings and recommendations
              will follow.</b>
            </p>
          </v-card-text>

          <v-card-text>
            <v-btn to='/crates' block dark large class='ship primary'>BROWSE OUR CRATES!</v-btn>    
          </v-card-text>

        </v-flex>
      </v-layout>       
  </v-container>
</template>

<script>
  import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
} from 'hooper'  
  import 'hooper/dist/hooper.css';

  export default {
    components: {
      Hooper,
      Slide,    
      HooperNavigation       
    },
   
   
  }
</script>


<style lang='stylus' scoped>  
  .about
    font-size 1.3em
    line-height 30px
    .img
      height 400px
      background #fff
      border 1px dashed #ccc
      margin-bottom 2em    
    .center
      text-align center         
  li
    margin 0.5em 0
</style>

