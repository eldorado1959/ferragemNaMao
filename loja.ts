
import { Produto } from './Produto';

export class Loja {
    private produtos: Produto[] = [];

    cadastrarProduto(produto: Produto): void {
        this.produtos.push(produto);
        console.log(`Produto ${produto.nome} cadastrado com sucesso!`);
    }

    listarProdutos(): Produto[] {
        return this.produtos;
    }
}
