class ProductManager {
  constructor() {
    this.products = [];
    this.productIdCounter = 1; // iniciamos el contador de produdctos en 1
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    //validamos campos antes de continuar... 
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Todos los campos son obligatorios.");
      return;
    }


    //Validamos el codigo de producto no exista antes de continuar...
    if (this.getProductByCode(code)) {
      console.log("El código del producto ya existe.");
      return;
    }

    //una vez validado instanceamos con siguiente ID!!
    const product = {
      id: this.productIdCounter++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(product);
    console.log("Producto agregado con éxito.");
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const producto = this.products.find((producto) => producto.id === id);
    if (producto) {
      return producto;
    } else {
      console.log("Not Found");
    }
  }

  getProductByCode(code) {
    const product = this.products.some((product) => product.code === code);
    if (product) {
      return true;
    }
  }




}


const productManager = new ProductManager();

productManager.addProduct("Producto 1", "Descripción 1", 10, "imagen1.jpg", "PC001", 100);
productManager.addProduct("Producto 2", "Descripción 2", 20, "imagen2.jpg", "PC002", 200);
productManager.addProduct("Producto 3", "Descripción 3", 30, "imagen3.jpg", "PC003", 300);
productManager.addProduct("Producto 4", "Descripción 4", 40, "imagen4.jpg", "PC003", 400); // intentamos con codigo ya existente
productManager.addProduct("Producto 4", "Descripción 4", 40, "imagen4.jpg", "PC004", 400);
//mostramos manager
console.log(productManager.getProducts());

const product = productManager.getProductById(1);
const product2 = productManager.getProductById(5);

