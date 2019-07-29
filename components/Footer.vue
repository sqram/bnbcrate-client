<template>
  <footer>
    <div class="copyright">2018 bnbcrate, inc.</div>
    <div>
      <v-btn to="/crates" text small color='primary'>Ship Crates</v-btn>
      <v-btn to="/about" text small color='primary'>About</v-btn>
      <v-btn @click="showDialog('login')" text small color='primary' v-if="!$store.state.user.jwt">Log In</v-btn>
      <v-btn @click="showDialog('register')" text small color='primary' v-if="!$store.state.user.jwt">Register</v-btn>
      <v-btn to="/faq" text small color='primary'>FAQs</v-btn>      
      <v-btn to="/contact" color='primary' text small>Contact</v-btn>      
    </div>
  </footer>
</template>

<script>
  
  export default {    
    methods: {
      // Opens a LoginRegister dialog, displaying @form
      showDialog (content)
      {
        this.$store.dispatch('dialogs/toggleDialog', {
          show: true,
          content,
        })        
      }
    }
  }
</script>

<style lang='stylus'>  
  footer
    height 100%
    background lighten($blue,95%)
    text-align center
    margin-top 2em
    color #999
    padding 1em 0
    //background #eee
    border-top 1px solid $blue
    .copyright
      margin-bottom 1em
    a
      display inline-block
      margin 0 2em
      color $blue

  
</style>



