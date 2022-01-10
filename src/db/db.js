import Dexie from 'dexie';

const db = new Dexie("ShoppingEcommerce");

db.version(1).stores({
    cart: '++id, price, title, category'
})


export const getAllProducts = async () => {
    const allProductFromDB = await db.cart.toArray();
    return allProductFromDB;
}

export const getProductById = async (id) => {
    const productFromDB = await db.cart.get(Number(id))
    return productFromDB;
}

export default db;