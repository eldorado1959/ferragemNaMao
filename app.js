"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formSection = document.querySelector(".form-section");
if (formSection) {
    formSection.style.display = "block";
}
var Produto_1 = require("./Produto");
var loja_1 = require("./loja");
var loja = new loja_1.Loja();
var idCounter = 1;
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addProduct").addEventListener("click", function () {
        var formSection = document.getElementById("formSection");
        formSection.style.display = "block";
    });
    document.getElementById("listProducts").addEventListener("click", function () {
        exibirListaProdutos();
    });
    document.getElementById("productForm").addEventListener("submit", function (event) {
        event.preventDefault();
        cadastrarProduto();
    });
});
function cadastrarProduto() {
    var nome = document.getElementById("name").value;
    var preco = parseFloat(document.getElementById("price").value);
    var estoque = parseInt(document.getElementById("stock").value);
    var novoProduto = new Produto_1.Produto(idCounter++, nome, preco, estoque);
    loja.cadastrarProduto(novoProduto);
    document.getElementById("productForm").reset(); // Limpa o formulário
}
function exibirListaProdutos() {
    var produtos = loja.listarProdutos();
    var productsList = document.getElementById("products");
    productsList.innerHTML = ""; // Limpa a lista existente
    produtos.forEach(function (produto) {
        var li = document.createElement("li");
        li.textContent = produto.exibirProduto();
        productsList.appendChild(li);
    });
}
var productListDiv = document.getElementById("productList");
if (productListDiv) {
    productListDiv.style.display = "block";
}
// Eventos
document.getElementById("addProduct").addEventListener("click", function () {
    var formSection = document.querySelector(".form-section");
    if (formSection) {
        formSection.style.display = "block";
    }
});
document.getElementById("listProducts").addEventListener("click", exibirListaProdutos);
document.getElementById("productForm").addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrarProduto();
});
document.addEventListener("DOMContentLoaded", function () {
    // Agora os manipuladores de eventos serão anexados corretamente
    document.getElementById("addProduct").addEventListener("click", function () {
        var formSection = document.getElementById("formSection");
        formSection.style.display = "block";
    });
    document.getElementById("listProducts").addEventListener("click", function () {
        exibirListaProdutos();
    });
    document.getElementById("productForm").addEventListener("submit", function (event) {
        event.preventDefault();
        cadastrarProduto();
    });
});
