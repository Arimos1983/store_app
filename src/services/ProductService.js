const products = [
    {id: 1, name: "smartphone", quantity: 2},
    {id: 2, name: 'tablet', quantity: 5},
    {id: 3, name: 'laptop', quantity: 7}
]
let tempProduct='';

export default class ProductService {

    listProducts()
    {
        return products;
    }
    increment(id)
    {   
        
        tempProduct = products.find(product => product.id == id);
        tempProduct.quantity++;
    }
    decrement(id)
    {
        tempProduct = products.find(product => product.id == id);
        if(tempProduct.quantity > 0){
        tempProduct.quantity--; }
    }

}

export const productService = new ProductService();