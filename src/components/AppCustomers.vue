<template>
  <div >
    <form class="form" @submit.prevent>
        <input v-model="newCustomer.fullname" type="text" placeholder="name" />
        <input v-model="newCustomer.email" type="text" placeholder="email" />
        <button @click="addCustomer" type="submit">Add Customer</button>
    </form>
    <table class="table">
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{customer.fullname}}</td>
          <td>{{customer.email}}</td>
          <td>
            <button @click="deleteCustomer(customer)">Delete</button>
          </td>
          <td>
            <router-link :to="{ name: 'Purchases', params: {id: customer.id}}">Latest Purchases</router-link>
          </td>
        </tr>
    </table>
  </div>
</template>

<script>
import { customerService } from '../services/CustomerService.js'

export default {
    data()
    {
        
        return {
        newCustomer: {products: []},
        customers: customerService.list()
        }
    },
    methods:
    {
        deleteCustomer(customer)
        {
            customerService.deleteCustomer(customer);
        },
        addCustomer()
        { 
            customerService.addCustomer(this.newCustomer);
            this.newCustomer= {};
        }
    }
  
}
</script>

