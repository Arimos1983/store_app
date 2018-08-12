const products = [
    {id: 1, name: "smartphone"},
    {id: 2, name: 'tablet'},
    {id: 3, name: 'laptop'}
]

export default class ProductService {

    listProducts()
    {
        return products;
    }

}

export const productService = new ProductService();