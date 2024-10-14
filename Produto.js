"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(id, nome, preco, estoque) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    Produto.prototype.exibirProduto = function () {
        return "ID: ".concat(this.id, ", Nome: ").concat(this.nome, ", Pre\u00E7o: R$ ").concat(this.preco.toFixed(2), ", Estoque: ").concat(this.estoque);
    };
    return Produto;
}());
exports.Produto = Produto;
//constructor(id: number, nome: string, preco: number, estoque: number) {
// this.id = id;
// this.nome = nome;
// this.preco = preco;
// this.estoque = estoque;
// }
