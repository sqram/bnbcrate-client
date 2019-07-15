<template>
  <div>
   
    <v-form ref="registerForm">
        <v-text-field
          label='E-mail'
          :rules="rules.email"
          v-model='email'
          persistent-hint>
        </v-text-field>              
      
        <v-text-field
          label='Password'
          :rules="rules.password"
          v-model='password'
          type='password'
          persistent-hint>
        </v-text-field>                  

        <v-btn
          class="primary"
          block
          large
          :loading='isSubmitting'
          @click='handleSubmit'>
          Create Account
        </v-btn>

        <v-alert color="error" icon="warning" :value='$store.state.errors.register'>
          <span v-html='$store.state.errors.register'></span>
        </v-alert>
    </v-form>
    
  </div>
</template>

<script>
  
  import { isEmail, isLength } from 'validator'
  

  export default {
    data()
    {
      return {        
        email: '',
        password: '',
        isSubmitting: false,
        rules: {
          email: [
            v => !!v || 'E-mail is required',
            v => {
              return isEmail(v) || 'This e-mail is not valid'
            }
          ],
          password: [
            v => !!v || 'Password is required',
            v => isLength(v, { min: 4 }) || 'Passwords must be at least 4 characters'
          ]
        },
      }
    },

    methods: {

      /*
       * This handles submitting the form with an email
       * and password. Not facebook or google
       */
      
      async handleSubmit()
      {
        this.isSubmitting = true
                
        if (!this.$refs.registerForm.validate())
        {
          this.isSubmitting = false
          return
        }

        try
        {
          this.$store.dispatch('user/register', {email: this.email, password: this.password}) 
        }
        finally
        {
          this.isSubmitting = false
        }
      }
      
    }
  }
</script>