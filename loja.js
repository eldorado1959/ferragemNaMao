"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
var Loja = /** @class */ (function () {
    function Loja() {
        this.produtos = [];
    }
    Loja.prototype.cadastrarProduto = function (produto) {
        this.produtos.push(produto);
        console.log("Produto ".concat(produto.nome, " cadastrado com sucesso!"));
    };
    Loja.prototype.listarProdutos = function () {
        return this.produtos;
    };
    return Loja;
}());
exports.Loja = Loja;
