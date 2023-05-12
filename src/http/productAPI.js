import { $authHost, $host } from "./index";

// Bouqets

export const createBouquet = async (bouquet) => {
    const {data} = await $authHost.post('api/bouquet', bouquet);
    return data;
}
export const fetchBouquets = async (page) => {
    const {data} = await $host.get('api/bouquet', {params: {
        page
    }});
    return data;
}
export const fetchOneBouquet = async(id) => {
    const {data} = await $host.get('api/bouquet/' + id);
    return data;
}

// Basket

export const createBasketItem = async (product) => {
    const {data} = await $authHost.post('api/basket', product);
    return data;
}
export const fetchBasket = async (userId) => {
    const {data} = await $authHost.get('api/basket', {params: {userId}});
    return data;
}

// Products

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/products', product);
    return data;
}
export const fetchProducts = async (page, limit) => {
    const {data} = await $host.get('api/products', {params: {
        page, limit
    }});
    return data;
}
export const fetchOneProduct = async(id) => {
    const {data} = await $host.get('api/products/' + id);
    return data;
}

