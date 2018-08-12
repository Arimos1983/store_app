<template>
  <div >
    <h1>Products</h1>
    <div class="search-wrapper">
      <label>Search products:</label>
      <input type="text" v-model="searchProducts" placeholder="Search products"/>
    </div>
    <table class="table">
        <tr class="font-weight-bold">
          <td>Products</td>
          <td>Quantuty</td>
        </tr>
        <tr v-for="product in products" :key="product.id" v-if="product.name.toLowerCase().includes(searchProducts.toLowerCase())">
          <td>{{product.name}}</td>
          <td>{{product.quantity}}</td>
          <td>
            <button @click="incrementQuantity(product)" >+</button>
            <button @click="decrementQuantity(product)">-</button>
          </td>
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
  },
  methods:
  {
    incrementQuantity(product)
    {
      productService.increment(product.id)
    },
    decrementQuantity(product){
      productService.decrement(product.id)
    }
  }
  
}
</script>

