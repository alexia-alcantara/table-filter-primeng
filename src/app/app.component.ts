import { CustomerService } from './customerservice';
import { Aprovacao, cCusto, Customer, EnvioDate, Fornecedor, informacoesAdicionais, ordemCompra, Representative, Valor } from './customer';
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
  notaFiscal: any[];

  fornecedores: Fornecedor[];

  valores: Valor[];
  envios: EnvioDate[];
  aprovacoes: Aprovacao[];
  cCustos: cCusto[];
  ordemCompras: ordemCompra[];
  informacoesAdicionais: informacoesAdicionais[];

  activityValues: number[] = [0, 100];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomersLarge().then(customers => {
      this.customers = customers;
      this.loading = false;

    });

    this.representatives = [
      { name: "Item 1" },
      { name: "Item 2" },
      { name: "Item 3" },
    ];

    this.fornecedores = [
      { name: "Fornecedor 1" },
      { name: "Fornecedor 2" },
      { name: "Fornecedor 3" },
    ];

    this.valores = [
      { item: "Item 1" },
      { item: "Item 2" },
      { item: "Item 3" },
    ];

    this.envios = [
      { date: "18/08/2022" },
      { date: "19/08/2022" },
      { date: "20/08/2022" }
    ]

    this.statuses = [
      { label: "Unqualified", value: "unqualified" },
      { label: "Qualified", value: "qualified" }
    ];

    this.aprovacoes = [
      { date: "22/08/2022" },
      { date: "23/08/2022" },
      { date: "24/08/2022" }
    ];

    this.cCustos = [
      { custo: "C.Custo 1" },
      { custo: "C. Custo 2" },
      { custo: "C.Custo 3" }
    ];

    this.ordemCompras = [
      { compra: "00000" },
      { compra: "000001" },
      { compra: "000002" }
    ];

    this.informacoesAdicionais = [
      { informacoes: "teste1" },
      { informacoes: "teste2" },
      { informacoes: "teste3" },
    ]
  }

}
