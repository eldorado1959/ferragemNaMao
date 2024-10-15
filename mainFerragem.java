
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class FerragemSystem {
    private List<Product> products = new ArrayList<>();

    public void run() {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("1. Cadastrar produto");
            System.out.println("2. Consultar produto");
            System.out.println("3. Sair");
            System.out.print("Escolha uma opção: ");
            int option = scanner.nextInt();

            switch (option) {
                case 1:
                    cadastrarProduto(scanner);
                    break;
                case 2:
                    consultarProduto(scanner);
                    break;
                case 3:
                    System.out.println("Saindo...");
                    return;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }
    }

    private void cadastrarProduto(Scanner scanner) {
        System.out.print("Digite o nome do produto: ");
        String name = scanner.next();
        System.out.print("Digite o preço do produto: ");
        double price = scanner.nextDouble();
        System.out.print("Digite a quantidade do produto: ");
        int quantity = scanner.nextInt();

        Product product = new Product(name, price, quantity);
        products.add(product);
        System.out.println("Produto cadastrado com sucesso!");
    }

    private void consultarProduto(Scanner scanner) {
        System.out.print("Digite o nome do produto para consultar: ");
        String name = scanner.next();

        for (Product product : products) {
            if (product.getName().equals(name)) {
                System.out.println("Nome: " + product.getName());
                System.out.println("Preço: " + product.getPrice());
                System.out.println("Quantidade: " + product.getQuantity());
                return;
            }
        }
        System.out.println("Produto não encontrado.");
    }

    public static class Product {
        private String name;
        private double price;
        private int quantity;

        public Product(String name, double price, int quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }

        public String getName() {
            return name;
        }

        public double getPrice() {
            return price;
        }

        public int getQuantity() {
            return quantity;
        }
    }

    public static void main(String[] args) {
        FerragemSystem system = new FerragemSystem();
        system.run();
    }
}