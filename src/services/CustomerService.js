const customers = [
    {id:1, fullname: "Pera Peric", email: "pera@gmail.com", products: [] },
    {id:2, fullname: "Mile Milic", email: "mile@gmail.com", products: [] },
    {id:3, fullname: "Jelena Beric", email: "jelena@gmail.com", products: [] }
]

let lastId=4;

class  CustomerService {
    list(){
        return customers;
    }
    findCustomer(id) {
        return customers.find(customer => customer.id == id);
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
}

export const customerService = new CustomerService();

