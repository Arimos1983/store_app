const customers = [
    {id:1, fullname: "Pera Peric", email: "pera@gmail.com", products: [] },
    {id:2, fullname: "Mile Milic", email: "mile@gmail.com", products: [] },
    {id:3, fullname: "Jelena Eric", email: "jelena@gmail.com", products: [] }
]

let lastId=4;

class  CustomerService {
    list(){
        return customers;
    }
    deleteCustomer(customer)
    {
        customers.splice(customers.indexOf(customer),1)
    }
    addCustomer(newCustomer)
    {
        customers.push(newCustomer);
        newCustomer.id=lastId;
        lastId++;
    }
    findCustomer(customer)
    {
        return customers[this.customers.indexOf(customer)]
    }

}

export const customerService = new CustomerService();

