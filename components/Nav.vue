<template>
  <div>
    <!-- Icon and drawer. we only want these on mobile -->
     <v-navigation-drawer 
      color='primary'
      fixed
      right
      clipped
      app
      light
      disable-resize-watcher
      disable-route-watcher
      v-model="drawer">

      
      <v-list dark>
        <!-- Login -->
        <v-list-item v-if='!$store.state.user.jwt' link  @click.native.stop="showDialog('login');">
          <v-list-item-icon>
            <v-icon>person</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Login</v-list-item-content>
        </v-list-item>

        <!-- Register -->
        <v-list-item v-if='!$store.state.user.jwt' link @click.native.stop="showDialog('register')">
          <v-list-item-icon>
            <v-icon>person</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Register</v-list-item-content>
        </v-list-item>         

        <!-- About -->
        <v-list-item link to='/about' @click.prevent="drawer = false">
          <v-list-item-icon>
            <v-icon>announcement</v-icon>
          </v-list-item-icon>
          <v-list-item-content>About</v-list-item-content>
        </v-list-item>

        <!-- FAQs -->
        <v-list-item link to='/faq' @click.prevent="drawer = false">
          <v-list-item-icon>
            <v-icon>help_outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>FAQs</v-list-item-content>
        </v-list-item>

        <!-- Logout -->
        <v-list-item link v-if='$store.state.user.jwt'>
          <v-list-item-icon>
            <v-icon>logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Logout</v-list-item-content>
        </v-list-item>       
      </v-list>

      
    </v-navigation-drawer>
    

    <!-- DESKTOP -->
    <v-toolbar dark>
      <v-toolbar-items>
        <v-btn text  to='/' id='navlogo'></v-btn>
      </v-toolbar-items>   
      <v-spacer></v-spacer>

      
      <v-btn text  to='/about' class="hidden-xs-only" v-if='!$store.state.user.jwt'>About</v-btn>
      

      <!-- <div class="hidden-xs-only">
        <v-btn text  to='/contact'>contact</v-btn>
      </div>

      <div class="hidden-xs-only">
        <v-btn text  to='/faq'>FAQs</v-btn>
      </div> -->

      
      <div class="hidden-xs-only">
        <div  v-if="$store.state.user.jwt">
          <v-btn text to='/dashboard'>My Dashboard</v-btn>          
        </div>
        <div v-else>
          <v-btn text @click.native.stop="showDialog('login')">Log in</v-btn>
          <v-btn text @click.native.stop="showDialog('register')">Register</v-btn>
        </div>
      </div>
      
      
      <v-btn to='/crates' class='accent ship'>SHIP A CRATE</v-btn>    
  
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      
    </v-toolbar>

    
  </div>

</template>
<script>  
  export default {  
    data ()
    {
      return {
        drawer: false,
        items: [
          { title: 'Login', icon: 'person', click: `showDialog('login')` },
          { title: 'About', icon: 'announcement' },
          { title: 'Contact', icon: 'mail_outline' },
          { title: 'FAQs', icon: 'person' },
          { title: 'MY DASHBOARD', icon: 'person' },
          { title: 'SHIP A CRATE', icon: 'person' },
        ]
      }
    },
    methods: {
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

<style lang="stylus" scoped>
  // Vuetify inserts a header element when using v-toolbar
  header
    margin 0
    padding 0
    background #2d3e50 !important
  #navlogo
    color $blue
    //border 1px dashed $blue
    background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAA0CAMAAAAntD+UAAAAAXNSR0IB2cksfwAAAFdQTFRFAAAANpa2Npm3OJq5MJW6N5q3OJezOI+vNZi4N5i3Npm4Npm3OJe3OJe6OJq3N5m2OJm5Npq5Npm5M5m5Npi4N5i2OJm5Npu5MI+vOZq2N5u4N5q3Npq3ty/N3wAAAB10Uk5TAIX1/zC/QCCP369fgGDgcKDv8FDQkMB/ED9Pn7BFTLMHAAAA+UlEQVR4nO3YzQ6DIAwAYLU4p1NRnOh+3v85Vx3GZQehhmbZRi/CwS+ApYpR9G0RJ+AxktioPtEpnq7XsU6RzCw2fC7pwgU2sJ9kRZqmDOyBOJvABnYHmx1zvBYnd9YSM1sulT8XLvc4ssXLK6XyxwLUEocpGmy1fsY7s6XpCAVAqhCb7DrxDntehvuWYGeAnoHFnNAMLK5Cy8A6bzra5q0AlBNHY3vb2u5ja1smENg1b6U1bwksDKPptNb8orCQD5dxvN6wpSybjMA2awFT3bZKYFUklVFra0Fw/arRGh991ms07w7F9ic/7QL7NyzTmZfphM70P4EjHv1IDqIEa7ZoAAAAAElFTkSuQmCC') no-repeat center
    background-size 80%
    

      
  
  // This is insserted inside nav by vuetify


    //background #273337!important
    //background white!important
    //box-shadow none!important
    //background transparent!important
  
    // #ship
    //   background $darksalmon      
    //   font-weight bold
</style>