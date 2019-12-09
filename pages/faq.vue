<template>

  <v-container class="container" grid-list-lg>
          
      <header>
        <h3 class="display-1">Common Questions</h3>
      </header> 
      
      <v-layout class="faq" row wrap>
        <v-flex>
         <v-card>
           <v-card-text>
             <div><b>Can I return crates?</b></div>
             <div>
               We currently do not accept returns. Especially since each crate
               may have a guest's name engraved on it.
             </div>
           </v-card-text>           
         </v-card>
        </v-flex>

        <v-flex>
         <v-card>
           <v-card-text>
             <div><b>How long does shipping take?</b></div>
             <div>
               Crate(s) should arrive at the address provided between 3-5 days,
               depends on the address.
             </div>
           </v-card-text>           
         </v-card>
        </v-flex>

        <v-flex>
         <v-card>
           <v-card-text>
             <div><b>Can I order a crate with custom items?</b></div>
             <div>
               At the moment we are not offering this option &mdash; in the future, however,
               we will allow for custom items and quantity per crate.
             </div>
           </v-card-text>           
         </v-card>
        </v-flex>

        <v-flex>
         <v-card>
           <v-card-text>
             <div><b>Are my transactions secure?</b></div>
             <div>
               Absolutely. Your credit card information never goes through our servers.
               <br>
               It is sent and processed by <a href="https://stripe.com/">Stripe.com</a> - a service
               used by Kickstarter, Instacart, Shopify, Lyft, and others.
             </div>
           </v-card-text>           
         </v-card>
        </v-flex>

        <v-flex>
         <v-card>
           <v-card-text>
             <div><b>Do you ship outside the United Stated?</b></div>
             <div>
               At the moment we only ship to the United States, but will soon
               ship to Europe and Asia.
             </div>
           </v-card-text>           
         </v-card>
        </v-flex>
          


      </v-layout>
        

  </v-container>
</template>

<style lang='stylus' scoped>
  .faq
    font-size 1.2em
    .card__text
      & > div:first-of-type
        color $blue
      & > div:last-of-type
        font-size 1em
        display none
    .img
      height 400px
      margin-top 1.4em
      background #fff
      border 1px dashed #ccc
    
    .center
      text-align center
      


  li
    margin 0.5em 0
</style>

