import fs from 'fs';

class ProductManager{
    constructor() {
        this.path='./files/products.json'
        this.products = [];
    }

    async addProduct({ title, description, price, thumbnail, code, stock }) {
        try {
            const products = await ProductManager.getProducts();
            if (!title || !description || !price || !thumbnail || !code || !stock) {
                console.log("Datos incompletos, no se cargó el producto");
                return null; 
            }
            const product = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            if (this.products.length === 0) {
                product.id = 1;
            }
            else {
                const lastProduct = this.products[this.products.length - 1];
                product.id = lastProduct.id++;
            }
            this.products.push(product);
            
        } catch (error) {
            console.log(error);
        }
    }

    getProducts = async () => {
        const products = await fs.promises.readFile('./files/products.json', 'utf-8');
        const arrayProducts = JSON.parse(products);
        return products;
    }

    getProductById = async (productId) => {
        try {
            const products = await ProductManager.getProducts();
            const productIndex = this.products.findIndex(product => product.id === productId);
            if (productIndex === -1) {
                console.log("El producto no existe");
                return null;
            }
            return productIndex;
        } catch (error) {
            console.log(error);
        }
    }

    updateProduct = async (productId, updatedField) => {
        try {
            const products = await ProductManager.getProducts();
            const productIndex = this.products.findIndex(product => product.id === productId);
            if (productIndex === -1) {
                console.log("El producto no existe");
                return null;
            }
        } catch (error) {
            console.log(error);           
        }
    }
}

const producto1 = new ProductManager();

const testProduct = {
    title:"libro 1",
    description: "Sinopsis 1",
    price: 1500,
    thumbnail: "foto 1",
    code: 2030,
    stock: 3
}

producto1.addProduct(testProduct);

const testProduct2 = {
    title:"libro 2",
    description: "Sinopsis 2",
    price: 1500,
    thumbnail: "foto 2",
    code: 2030,
    stock: 8
}

producto1.addProduct(testProduct2);

console.log(producto1.getProduct());
