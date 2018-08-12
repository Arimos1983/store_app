<template>
  <div >

    <h1>Purchases</h1>
    <h4>{{customer.fullname}}</h4>
    <h4>{{customer.email}}</h4>
    <table class="table">
        <tr v-for="product in customer.products" :key="product.id">
          <td>{{product.name}}</td>
          
        </tr>
    </table>

    <router-link to="/">Home</router-link><br>

  </div>
</template>

<script>
import { customerService } from '../services/CustomerService.js'
export default {
  
      props: ['id'],

      created() {

      this.customer = customerService.findCustomer(this.id)
    }
}
</script>

