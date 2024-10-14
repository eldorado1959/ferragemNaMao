export class Produto {  
  constructor(  
      public id: number,  
      public nome: string,  
      public preco: number,  
      public estoque: number  
  ) {}  

  exibirProduto(): string {  
      return `ID: ${this.id}, Nome: ${this.nome}, Preço: R$ ${this.preco.toFixed(2)}, Estoque: ${this.estoque}`;  
  }  
}

  //constructor(id: number, nome: string, preco: number, estoque: number) {
   // this.id = id;
   // this.nome = nome;
   // this.preco = preco;
   // this.estoque = estoque;
 // }

  