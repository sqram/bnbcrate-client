<template>  
    <v-app >
      <Nav />
      <Dialog :content='$store.state.dialogs.content' />
      <Nuxt />
      <Footer />
    </v-app>
</template>

<script>
import Nav from '~/components/Nav'
import Dialog from '~/components/Dialog'
import Footer from '~/components/Footer'
export default {
  components: {
    Nav,
    Dialog,
    Footer
  },  
  async mounted () {
    // Fetch crates
    //await this.$store.dispatch('products/getCrates')
  }
}
</script>

<style lang="stylus">
  h1, h2, h3, h4
    color $blue

  // Headline on top of each page
  // Extra padding bottom is to counter container's
  // top padding. exclude v-sheet as that is added to
  // to the nav's header by vuetify
  header:not(.v-sheet)
    text-align center
    margin 2em 0 3em 0
    p:first-of-type
      padding-top 15px
      color lighten(#333, 20%)

</style>
