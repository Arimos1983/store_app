<template>
    <div>
        
        <div v-if="product.quantity" class="form-group" style="width: 18rem;" >

            <h1>Buy Product</h1>       
            <p>Product: {{product.name}}</p>
            <p>Quantity: {{product.quantity}}</p>

            <select class="form-control" id="customer" v-model="selectedCustomer">
                <option disabled value="">Please select one</option>
                <option v-for="customer in customers" :key="customer.id" v-bind:value="customer" >{{customer.fullname}}</option>
            </select><br>

            <button class="btn btn-primary" @click="purchase">Confirm</button>{{" "}}
            <router-link class="btn btn-primary" to="/products">Cancel</router-link><br>  

        </div>
    
        <div v-else>
            <h3>There is no stock at the moment</h3>
            <router-link class="btn btn-primary" to="/products">Back to product page</router-link><br> 
        </div>

    </div>
</template>

<script>
import { productService } from '../services/ProductService.js'
import { customerService } from '../services/CustomerService.js'
export default {
  props: ['id'],
  created() {

      this.product = productService.findProduct(this.id)
    },
    data()
    {
        
        return {
        customers: customerService.list()
        }
    },
    methods:
    {
        purchase() 
        {
            if (!this.selectedCustomer) alert('Please select a customer.')
            customerService.addProductToCustomer(this.selectedCustomer, this.product)
            productService.decrement(this.product.id)
        }
    }
  
  
}
</script>

