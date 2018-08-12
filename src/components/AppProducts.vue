<template>
  <div >
    <h1>Products</h1>
    <table class="table">
        <tr v-for="product in products" :key="product.id">
          <td>{{product.name}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
import { productService } from '../services/ProductService.js'
export default {
  data(){
    return {
    products: productService.listProducts()
    }
  }
  
}
</script>

