<template>

  <v-dialog v-model="show" max-width="700px">
    
    <div v-if="content == 'login'">
      <v-card>
        <v-card-title class="headline grey lighten-5" primary-title>
          Login to your account
        </v-card-title>

        <v-card-text>
          <FormLogin />          
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            text
            small
            color="secondary"
            to='/reset-password'
            class="caption"
            @click='show = false'>
              Forgot password?
            </v-btn>
          <v-btn
            small
            text
            color='secondary'
            class="caption"
            @click.prevent='toggleDialog("register")'>
              Don't have an account? Create one!
            </v-btn>
        </v-card-actions>
      </v-card>
    </div>


    <div v-if="content == 'register'">
      <v-card>
        <v-card-title class="headline grey lighten-5" primary-title>
          <div class="headline">Create your account!</div>             
        </v-card-title>
      
        <v-card-text>
          <FormRegister />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            text color='secondary'
            class="caption"
            @click.prevent='toggleDialog("login")'>
              Already have an account? Log in!
          </v-btn>
        </v-card-actions>       
      </v-card>
    </div>
  
  </v-dialog>
</template>


<style lang="stylus" scoped>
  .headline
    text-align center
</style>

<script>
  import FormRegister from './FormRegister'
  import FormLogin from './FormLogin'
  
  

  export default {
    components: {
      FormRegister,
      FormLogin
    },
    
    computed: {
      show: {
        get ()
        {
          return this.$store.state.dialogs.show
        },
        set (flag)
        {
          this.$store.commit('dialogs/TOGGLE_DIALOG', { })
        }        
      },
      content: {
        get ()
        {
          return this.$store.state.dialogs.content
        },
        set (content)
        {
          this.$store.commit('dialogs/TOGGLE_DIALOG', { content })
        }
      }
    },
    
    
    methods: {
    
      /**
       * Updates the dialog component by showing/hiding,
       * and/or changing its contents
       * 
       * @param {str} content: 'login', 'register', 'newAddress', etc
       */

      toggleDialog (content)
      {
        this.$store.commit('dialogs/TOGGLE_DIALOG', { show: true, content })      
      }      
    }
 
  }
</script>


