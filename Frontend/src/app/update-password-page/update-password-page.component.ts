import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-update-password-page',
  templateUrl: './update-password-page.component.html',
  styleUrls: ['./update-password-page.component.css']
})
export class UpdatePasswordPageComponent implements OnInit {

  newPassword?: string;
  customer: Customer[] = []

  constructor(private route: Router, private customerService: CustomersService) { }

  ngOnInit(): void {
    this.customerService.getCustomerById(Number(window.localStorage.getItem("id"))).subscribe(data => {
      this.customer = data;
    })
  }

  updatePassword(){
   console.log(this.customer)
   console.log(this.customer[0].password)
   this.customer[0].password = this.newPassword;
   console.log(this.customer);
   this.customerService.updateCustomerPassword(Number(window.localStorage.getItem("id")), this.customer)
  }
}
