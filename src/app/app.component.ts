import { CustomerService } from './customerservice';
import { Customer, Fornecedor, Representative } from './customer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-tabela';

  customers: Customer[];
  loading: boolean = true;

  representatives: Representative[];
  statuses: any[];

  fornecedor: Fornecedor[];

  activityValues: number[] = [0, 100];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomersLarge().then(customers => {
      this.customers = customers;
      this.loading = false;

    });

    this.representatives = [
      { name: "Item 1" },
      { name: "Item 2" }
    ];

    this.fornecedor = [
      { name: "Fornecedor 1" },
      { name: "Fornecedor 2" }
    ];


    this.statuses = [
      { label: "Unqualified", value: "unqualified" },
      { label: "Qualified", value: "qualified" }
    ]
  }

}
