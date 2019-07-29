<template>

  <div>          
      <header>
      <h3 class="display-1">Dashboard</h3>     
    </header> 
    <v-container grid-list-md text-center>
      <v-layout wrap column>
        <v-flex xs12  lg8 offset-lg2>
          <v-card>
            <v-card-text>
              <v-btn text block large to='/dashboard/account-settings'>Account Settings</v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12  lg8 offset-lg2>
          <v-card>
            <v-card-text>
              <v-btn text block large to='/dashboard/addresses'>Shipping Addresses</v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12  lg8 offset-lg2>
          <v-card>
            <v-card-text>
              <v-btn text block large to='/dashboard/creditcards'>Credit Cards</v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12  lg8 offset-lg2>
          <v-card>
            <v-card-text>
              <v-btn text block large to='/dashboard/orders'>Order History</v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12  lg8 offset-lg2>
          <v-card>
            <v-card-text>
              <v-btn text class="" to='#' block large @click.stop.prevent='$store.commit("user/LOGOUT", {redirect: true})'>Logout</v-btn>
            </v-card-text>
          </v-card>                    
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  
</template>

