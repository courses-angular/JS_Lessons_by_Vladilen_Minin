class Complaints {
    constructor() {
        this.complaints = [];
    }
    reply(complaint){}
    add(complaint){
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}
class ProductComplaints extends Complaints{
    reply({id,customer,details}) {
        return `Product complaint: ${id}: ${customer} (${details})`
    }
}
class ServiceComplaints extends Complaints{
    reply({id,customer,details}) {
        return `Service complaint: ${id}: ${customer} (${details})`
    }
}
class ComplaintRegistry {
    register(customer,type,details){
       const id =Math.floor(Math.random() * 10000 + Date.now());
       let complaint;
       if(type === 'service'){
           complaint = new ServiceComplaints()
       }else{
           complaint = new ProductComplaints()
       }
       return complaint.add({id,customer,details})
    }
}
const registry = new ComplaintRegistry();
console.log(registry.register('Ivan', 'service', 'Service not available'));
console.log(registry.register('Igor', 'product', 'Product out of date'));
