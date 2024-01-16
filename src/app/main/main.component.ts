import { Component, OnInit } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { DataViewModule } from 'primeng/dataview';
import { Product } from '../main/product';
import { ProductService } from '../main/productservice';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CarrinhoService } from '../carrinho/carrinho.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SplitterModule, MenuModule, DataViewModule, CommonModule, ButtonModule, ToastModule, OverlayPanelModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {

  items: MenuItem[] | undefined;
 
  products!: Product[];
  
  visible: boolean = false;

  sortOrder = 0;

  sortField = 'name';

  icon = 'pi pi-sort-alpha-down'

  filtro = 0;

  selecionados = "Todos";

  constructor(private productService: ProductService, private messageService: MessageService, private router: Router, private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.setItems();
    this.setProducts();
  }

  showWarningCarrinho() {
    this.messageService.add({
      id: 'add',
      key: 'bc',
      summary: 'item adicionado ao carrinho',
      detail: 'ir para o carrinho',
      data: { action: 'routingCarrinho()' },
      life: 5000
    });
  }

  toastClick(id: string): void {
    if (id === 'add') {
      this.routingCarrinho();
    }
    else {
      this.unsort();
    }
  }

  routingCarrinho(): void {
    this.router.navigate(['carrinho']);
  }

  showWarningOrdemAlfabetica(summary: string) {
    this.messageService.add({
      id: 'order',
      key: 'bc',
      summary: summary,
      detail: 'Cancelar',
      data: { action: 'close' },
      life: 5000
    });
  }

  showFilterOptions() {
    this.visible = true;
  }

  sortIconClick(): void {
    if (this.sortOrder === 1) {
      this.sortOrder = -1;
      this.icon = 'pi pi-sort-alpha-down-alt'
      this.showWarningOrdemAlfabetica('itens organizados de Z à A',);
    } else {
      this.sortOrder = 1;
      this.icon = 'pi pi-sort-alpha-down'
      this.showWarningOrdemAlfabetica('itens organizados de A à Z');
    }
  }

  unsort(): void {
    this.sortOrder = 0;
    this.icon = 'pi pi-sort-alpha-down';
    this.setProducts();
  }

  showItems(category: string) {
    this.selecionados = category.charAt(0).toUpperCase() + category.slice(1);
    switch (category) {
      case 'todos':
        this.products = this.productService.allItems();
        break;
      case 'pizza':
        this.products = this.productService.pizzaItems();
        break;
      case 'sobremesa':
        this.products = this.productService.sobremesaItems();
        break;
      case 'lanche':
        this.products = this.productService.lancheItems();
        break;
      case 'acai':
        this.products = this.productService.acaiItems();
        break;
      case 'bebidas':
        this.products = this.productService.bebidasItems();
        break;
      default:
        this.products = [];
        break;
    }
  }

  private setItems(): void {
    this.items = [
      {
        label: 'Todos',
        command: () => {
          this.showItems('todos');
        },
      },
      { 
        label: 'Pizza',
        command: () => {
          this.showItems('pizza');
        }, 
      },
      { 
        label: 'Sobremesa', 
        command: () => {
          this.showItems('sobremesa');
        },
      },
      { 
        label: 'Lanche',
        command: () => {
          this.showItems('lanche');
        }, 
      },
      { label: 'Açaí', 
        command: () => {
          this.showItems('acai');
        },
      },
      { label: 'Bebidas', 
        command: () => {
          this.showItems('bebidas');
        },
      }
    ];
  }

  private setProducts(): void {
    this.productService.getProducts().then((data) => (this.products = data.slice(0, 10)));
  }
  
  showPrices(price: number) {
    this.filtro = price;
    switch (price) {
      case 1:
        this.products = this.productService.cheaperItems();
        break;
      case 2:
        this.products = this.productService.mediumItems();
        break;
      case 3:
        this.products = this.productService.expensiveItems();
        break;
      default:
        this.setProducts();
        break;
    }
  }

  addCarrinho(item: any) {
    this.carrinhoService.carrinho.push(item);
  }

}