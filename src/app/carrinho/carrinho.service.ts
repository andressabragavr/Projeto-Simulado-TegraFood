import { Injectable } from '@angular/core';
    
@Injectable({ providedIn: 'root' })
export class CarrinhoService {
    carrinho: any[] = [];

    removeItem(item: any) {
        this.carrinho = this.carrinho.filter((i) => i !== item);
    }    
}