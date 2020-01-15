<template>
  <v-container grid-list-md>
    
     <header>
        <h3 class="display-1">Contact Us</h3>  
        <p>We can also be reached via <a href="https://www.facebook.com/bnbcrate/">Facebook!</a></p>        
      </header> 

    <v-layout column wrap v-if='!isSubmitted'>

      <v-form :hidden='xhr.result == 1' ref='contactform'>        
        <v-flex xs10 md8 offset-xs1 offset-md2>
          <v-text-field
            filled
            label="Your E-mail"
            type='email'
            v-model="email"          
            append-icon="email"
            :rules="[rules.email.regex]">
          </v-text-field>
        </v-flex>
        <v-flex xs10 md8 offset-xs1 offset-md2>       
          <v-select
            filled
            label="Select a topic"
            :items="items"
            v-model='select'
            item-text='topic'
            item-value='id'
            return-object
            persistent-hint>
          </v-select>
        </v-flex>
        <v-flex xs10 md8 offset-xs1 offset-md2>
          <v-textarea
            name="message"
            label="Your message"
            v-model='msg'            
            outline
            :rules="[rules.msg.len]">
          </v-textarea>
        </v-flex>
        <v-flex xs10 md8 offset-xs1 offset-md2>
          <v-btn
            large
            block
            class="primary"
            :loading='isSubmitting'
            @click='submit'>
              SEND
            </v-btn>
        </v-flex>
        <v-flex xs10 md8 offset-xs1 offset-md2>
          <v-alert :type="xhr.status" :value="xhr.result != null">
            {{ xhr.message }}
          </v-alert>
        </v-flex>
      </v-form>

      
       
    </v-layout>

    <!-- Form has been submitted -->
    <v-layout column wrap v-else>
      <v-flex xs10 md6>
        <v-card>
          <v-card-text>
            <div class="sent">
              <h1 center>Thank you</h1>
              <p>
                Your email has been sent. We will reply shortly to <b>{{ email }}</b>.
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  
  export default {
    data () {
      return {       
        isSubmitting: false,
        isSubmitted: false,
        email: null,
        select: {topic: 'Select a topic', id: -1},
        msg: null,
        items: [
          { topic: 'Orders', id: 1 },
          { topic: 'Payments', id: 5 },
          { topic: 'Shipping', id: 10 },
          { topic: 'Gerenal Questions', id: 15 },
          { topic: 'Business Inquiries', id: 20 },
          { topic: 'Press Inquiries', id: 25 },
          { topic: 'Website issues', id: 30 },
        ],
        xhr: {
          result: null,
          message: 'Success!',
          status: 'success'
        },
        rules: {
          email: {
            //required: v => !!v || 'Required.',
            regex: v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
          },
          msg: {
            len: v => /.{20,}/i.test(v) || "Message must be over 20 characters"           
          }
        },
        
      }
    },
 
    methods: {
      async submit ()
      {
        if (this.$refs.contactform.validate())
        {
          this.isSubmitting = true
          
          var req = this.$axios({
            method: 'post',
            url: `/contact`,
            data: { email: this.email, topic: this.select.id, msg: this.msg  }
          })
          .then(r => {
            this.isSubmitting = false                
            console.log('-----r')                     
            console.log(r)
            this.xhr.result = r.data.result
            this.xhr.message = r.data.payload.message
            this.xhr.status = r.data.result ? 'success' : 'error'          
            if (r.data.result)        {
              this.isSubmitted = true
            }
          })
          .catch(e => {
            this.isSubmitting = false                                     
            this.xhr.result = 0
            this.xhr.message = 'Unknown error'
            this.xhr.status = 'error'
          })
          .finally( () => {
            this.isSubmitting = false
            
          })
        }
      }
    }
  }
</script>

<style lang='stylus' scoped>   
  .sent
    border 1px dashed #ccc
    padding 1em 0
  h1
    text-align center
    margin-bottom 1em
  p
    text-align center
    font-size 110%
    padding 0
    margin 0
</style>

