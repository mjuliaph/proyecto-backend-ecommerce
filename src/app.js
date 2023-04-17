import express, { response } from "express";
import ProductManager from "../products/ProductManager.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.get('/products', (req, res) => {
    const limit = request.query

    if (!limit) {
        return response.status(200).send(products);
    }
})



// get.get('/products/:pid', (req, res) => {
    
// })



app.listen(8080, () => console.log("servidor escuchando desde el puerto 8080!"));











// const context = async() => {
//     try {
//         const content = await fs.promises.readFile('./package.json');
//         const object = JSON.parse(content);
//         console.log(object);
//     } catch (error) {
        
//     }
// }

// context();

// class ProductManager{
//     constructor() {
//         this.products = [];
//     }
//     addProduct = function ({ title, description, price, thumbnail, code, stock }) {
//         if (!title || !description || !price || !thumbnail || !code || !stock) {
//             console.log("Datos incompletos, no se cargó el producto");
//             return null; 
//         }
//         const product = {
//             title,
//             description,
//             price,
//             thumbnail,
//             code,
//             stock
//         }
//         if (this.products.length === 0) {
//             product.id = 1;
//         }
//         else {
//             const lastProduct = this.products[this.products.length - 1];
//             product.id = lastProduct.id++;
//         }
//         this.products.push(product);
//     }
//     getProduct = () => {
//         return this.products;
//     }
//     getProductById = (productId) => {
//         const productIndex = this.products.findIndex(product => product.id === productId);
//         if (productIndex === -1) {
//             console.log("El producto no existe")
//             return null;
//         }
//         return console.log(productId);
//     }
// }

// const producto1 = new ProductManager();

// const testProduct = {
//     title:"libro 1",
//     description: "Sinopsis 1",
//     price: 1500,
//     thumbnail: "foto 1",
//     code: 2030,
//     stock: 3
// }

// producto1.addProduct(testProduct);

// const testProduct2 = {
//     title:"libro 2",
//     description: "Sinopsis 2",
//     price: 1500,
//     thumbnail: "foto 2",
//     code: 2030,
//     stock: 8
// }

// producto1.addProduct(testProduct2);

// console.log(producto1.getProduct());



