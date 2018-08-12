<template>
  <div >
    <h1>Products</h1>
    <div class="search-wrapper">
      <label>Search products:</label>
      <input type="text" v-model="searchProducts" placeholder="Search products"/>
    </div>
    <table class="table">
        <tr v-for="product in products" :key="product.id" v-if="product.name.toLowerCase().includes(searchProducts.toLowerCase())">
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
    products: productService.listProducts(),
    searchProducts: ''
    }
  }
  
}
</script>

