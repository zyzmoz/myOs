import { Component, OnInit } from '@angular/core';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [
    {
      id: 'new',
      acitve: true,
      birth_date: new Date().toDateString(),
      address: 'Street',
      city: {
        id: '000',
        name: 'Araras',
        state: 'SP'
      },
      complement: '',
      gv_number: '000',
      id_number: '000',
      mobile: 35353535,
      name: 'Daniel Cunha',
      phone: 35353535,
      email: 'a@a.com',
      zipcode: '1245'
    } 
  ];

  constructor() {
    console.log(this.customers);
    
    
    
  }

  ngOnInit() {
   
    
    
  }

}
