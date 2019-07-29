<template>

  <v-container>
          
      <header>
        <h3>Admin &mdash; Orders</h3>       
      </header> 
      
      <div v-if="isFetching"><loading /></div>  
<!--       
      <v-data-table
        
        :headers="headers"
        :items="orders"
        
        item-key="name"
        class="elevation-1">          
      </v-data-table> -->

       <v-simple-table fixed-header>
         <thead>
          <tr>
            <th v-for='header in headers' :key='header.text'>{{ header.text }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td>{{ item.id }}</td>
            <td>
               <v-select
                  :items='selectItems'
                  v-model='item.status'
                  @change='onChange($event, item)'
                  >
                </v-select>
            </td>
            <td>{{ item.items }}</td>
            <td>{{ item.guest }}</td>
            <td>{{ item.total }}</td>
            <td>{{ item.date }}</td>
            <td>
              <table>
                <tr>
                  <td>
                    <div v-if='item.address.name'><b>{{ item.address.name }}</b></div>
                    <div>{{ item.address.street }}</div>
                    <div>{{ item.address.city }} {{ item.address.state }} {{ item.address.zip }}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
       </v-simple-table>
  </v-container>
</template>
<script>

  import Loading from '~/components/Loading'

  export default {
    components: {
      Loading,
    },
    data () {
      return {
        isFetching: true,
        
        selectItems: ['new', 'ready', 'shipped'],
        orders: [],
       
        headers: [
          {
            text:'ID',
            value: 'id',
            align: 'left',
            sortable: false,
          },
          { text: 'Status', value: 'status' },
          { text: 'Items', value: 'items' },
          { text: 'Date', value: 'date' },
          { text: 'Total', value: 'total' },
          { text: 'Guest Name', value: 'guest' },
          { text: 'Address', value: 'address' }
        ]
      }
    },
    async beforeMount ()
    {    
      // TODO deconstruct token
      if (!this.$store.state.user.jwt && this.$store.state.user.lvl != 1)
      {
        //this.$router.push('/')
      }
      
    
      const req = await this.$axios({
        method: 'get',
        url: `/admin/orders`
      })

      if (req.data.result)
      {
        
        this.orders = req.data.payload.orders
        
      }
      
      this.isFetching = false
      
    },

    methods: {
      async onChange (v, obj)
      {
        const req = await axios({
          method: 'post',
          data: {id: obj.id, status: v},
          url: `${window.api}/admin/orders/update-status`,
          headers: {'Authorization': `Bearer ${this.$store.state.user.jwt}`}
        })
      }
    }

    
  }
</script>

