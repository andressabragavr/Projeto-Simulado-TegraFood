import { Injectable } from '@angular/core';
    
@Injectable({ providedIn: 'root' })
export class ProductService {
    getProductsData() {
        return [
            {
                name: 'Pizza Marguerita',
                description: '(Muçarela, tomate, majericão , orégano)',
                image: '/PizzaMarguerita.png',
                price: 60,
                category: 'pizza',
            },
            {
                name: 'Torta de Leite Ninho',
                description: '(Massa de Baunilha; Creme de ninho Tradicional; Morango; Chantilly)',
                image: '/TortaNinho.png',
                price: 70,
                category: 'sobremesa',
            },
            {
                name: 'Lanche X-Burguer',
                description: '(Pão, hamburguer, alface, tomate, queijo cheddar, cebola e picles)',
                image: '/X-Burguer.png',
                price: 22,
                category: 'lanche',
            },
            {
                name: 'Pizza de Strogonofe',
                description: '(Strogonofe, muçarela e orégano)',
                image: '/PizzaStrogonofe.png',
                price: 65,
                category: 'pizza',
            },
            {
                name: 'Açaí com frutas',
                description: '(Açaí, banana, morango, uva, leite ninho em pó e leite condensado)',
                image: '/Acai.png',
                price: 18.00,
                category: 'acai',
            },
            {
                name: 'Refrigerante Coca-Cola 350ml',
                image: '/CocaCola.png',
                price: 6,
                category: 'bebidas',
            },
            {
                name: 'Taça de sonho de valsa',
                description: '(Chocolate branco e preto, sonho de valsa, morango e leite condensado)',
                image: '/TacaSonhoDeValsa.png',
                price: 15.00,
                category: 'sobremesa',
            },
            {
                name: 'Barca de Açaí',
                description: '(Açaí, banana, morango, uva, leite ninho em pó e leite condensado)',
                image: '/BarcaAcai.png',
                price: 22.00,
                category: 'acai',
            },
            {
                name: 'Refrigerante Coca-Cola zero 350ml',
                image: '/CocaColaZero.png',
                price: 5.00,
                category: 'bebidas',
            },
            {
                name: 'Lanche de Churrasco',
                description: '(Pão, hamburguer, calabresa, iscas de carne, muçarela, cebola e picles)',
                image: '/LancheChurrasco.png',
                price: 30.00,
                category: 'lanche',
            },
        ];
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }


    allItems() {
        return this.getProductsData();
    }

    pizzaItems() {
        return this.getProductsData().filter((item) => item.category === 'pizza');
    }

    sobremesaItems() {
        return this.getProductsData().filter((item) => item.category === 'sobremesa');
    }

    lancheItems() {
        return this.getProductsData().filter((item) => item.category === 'lanche');
    }

    acaiItems() {
        return this.getProductsData().filter((item) => item.category === 'acai');
    }

    bebidasItems() {
        return this.getProductsData().filter((item) => item.category === 'bebidas');
    }


    cheaperItems() {
        return this.getProductsData().filter((item) => item.price >= 5 && item.price <= 25);
    }

    mediumItems() {
        return this.getProductsData().filter((item) => item.price >= 26 && item.price <= 45);
    }

    expensiveItems() {
        return this.getProductsData().filter((item) => item.price >= 46);
    }

};