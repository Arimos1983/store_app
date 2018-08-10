<template>
  <div >
    <table class="table">
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{customer.fullname}}</td>
          <td>{{customer.email}}</td>
          <td>
            <button @click="deleteCustomer(customer)">Delete</button>
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
        customers: customerService.list()
        }
    },
    methods:
    {
        deleteCustomer(customer)
        {
            customerService.deleteCustomer(customer);
        }
    }
  
}
</script>

