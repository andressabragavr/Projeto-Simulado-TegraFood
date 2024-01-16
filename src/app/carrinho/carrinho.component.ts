import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CarrinhoService } from './carrinho.service';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';


interface Unidade {
  name: string;
  code: string;
}

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [ButtonModule, TableModule, DataViewModule, CommonModule, DropdownModule, FormsModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})

export class CarrinhoComponent implements OnInit {

  products: any[] =[];

  unidades: Unidade[] | undefined;

  selectedUnidade: Unidade | undefined;

  total = 0;

  subTotal = 0;

  entrega = 0;

  constructor(private router: Router, private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.showCarrinho();

    this.getSubTotal();

    this.unidades = [
      { name: '1x', code: '1' },
      { name: '2x', code: '2' },
      { name: '3x', code: '3' },
      { name: '4x', code: '4' },
      { name: '5x', code: '5' },
      { name: '6x', code: '6' }
  ];
  }

  showCarrinho(): void {
    this.products = this.carrinhoService.carrinho;
    this.getSubTotal();
  }

  deleteItem(item: any) {
    this.carrinhoService.removeItem(item);
    this.showCarrinho();
  }

  calcularEntrega() {
    this.entrega = 10;
    this.getTotal();
  }

  getSubTotal() {
    this.subTotal = 0;
    this.products.forEach(product => {
      this.subTotal += product.price * (parseInt(product.quantity?.code) ?  parseInt(product.quantity?.code) : 1);
    });
    this.getTotal();
  }

  getTotal() {
    this.total = this.subTotal + this.entrega;
  }

  routingMain() {
    this.router.navigate(['main']);
  }

  routingCarrinho() {
    this.router.navigate(['carrinho']);
  }
 
}