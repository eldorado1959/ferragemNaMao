
const formSection = document.querySelector(".form-section") as HTMLElement;
if (formSection) {
  formSection.style.display = "block";
}



import { Produto } from './Produto';
import { Loja } from './loja';

const loja = new Loja();
let idCounter = 1;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("addProduct")!.addEventListener("click", () => {
        const formSection = document.getElementById("formSection") as HTMLElement;
        formSection.style.display = "block";
    });

    document.getElementById("listProducts")!.addEventListener("click", () => {
        exibirListaProdutos();
    });

    document.getElementById("productForm")!.addEventListener("submit", (event) => {
        event.preventDefault();
        cadastrarProduto();
    });
});

function cadastrarProduto() {
    const nome = (document.getElementById("name") as HTMLInputElement).value;
    const preco = parseFloat((document.getElementById("price") as HTMLInputElement).value);
    const estoque = parseInt((document.getElementById("stock") as HTMLInputElement).value);

    const novoProduto = new Produto(idCounter++, nome, preco, estoque);
    loja.cadastrarProduto(novoProduto);
    (document.getElementById("productForm") as HTMLFormElement).reset(); // Limpa o formulário
}

function exibirListaProdutos() {
    const produtos = loja.listarProdutos();
    const productsList = document.getElementById("products")!;
    productsList.innerHTML = ""; // Limpa a lista existente

    produtos.forEach(produto => {
        const li = document.createElement("li");
        li.textContent = produto.exibirProduto();
        productsList.appendChild(li);
    });
}


  const productListDiv = document.getElementById("productList");
  if (productListDiv) {
    productListDiv.style.display = "block";
  }


// Eventos
document.getElementById("addProduct")!.addEventListener("click", () => {
  const formSection = document.querySelector(".form-section") as HTMLElement;
  if (formSection) {
    formSection.style.display = "block";
  }
});

document.getElementById("listProducts")!.addEventListener("click", exibirListaProdutos);

document.getElementById("productForm")!.addEventListener("submit", (event) => {
  event.preventDefault();
  cadastrarProduto();
});


document.addEventListener("DOMContentLoaded", () => {
    // Agora os manipuladores de eventos serão anexados corretamente
    document.getElementById("addProduct")!.addEventListener("click", () => {
        const formSection = document.getElementById("formSection") as HTMLElement;
        formSection.style.display = "block";
    });

    document.getElementById("listProducts")!.addEventListener("click", () => {
        exibirListaProdutos();
    });

    document.getElementById("productForm")!.addEventListener("submit", (event) => {
        event.preventDefault();
        cadastrarProduto();
    });
});
