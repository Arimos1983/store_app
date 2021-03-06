import Vue from 'vue'
import Router from 'vue-router';

import Customers from './components/AppCustomers.vue';
import Products from './components/AppProducts.vue';
import Purchases from './components/AppLatestPurchases.vue';
import PurchaseProduct from './components/AppPurchaseProduct.vue';


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', redirect: 'customers'},
        {path: '/customers', component: Customers },
        {path: '/products', component: Products},
        {path: '/products/:id', component: PurchaseProduct, name: 'PurchaseProduct', props: true},
        {path: '/customers/:id', component: Purchases, name: 'Purchases', props: true}
    ]
})