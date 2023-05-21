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
export const changeBasketItem = async (product) => {
    const {data} = await $authHost.put('api/basket', product);
    return data;
}
export const fetchBasket = async (userId) => {
    const {data} = await $authHost.get('api/basket', {params: {userId: userId}});
    return data;
}
export const deleteBasketItem = async ({basketId, userId}) => {
    const {data} = await $authHost.delete('api/basket', {params: {basketId: basketId, userId: userId}});
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

// PhotoReviews

export const createPhotoReview = async (review) => {
    const {data} = await $authHost.post('api/reviewPhoto', review);
    return data;
}
export const fetchPhotoReviews = async (page, limit) => {
    const {data} = await $host.get('api/reviewPhoto', {params: {
        page: page, limit: limit
    }});
    return data;
}
export const fetchOnePhotoReview = async(id) => {
    const {data} = await $host.get('api/reviewPhoto/' + id);
    return data;
}

// TextReviews

export const createTextReview = async (review) => {
    const {data} = await $authHost.post('api/reviewText', review);
    return data;
}
export const fetchTextReviews = async (page, limit) => {
    const {data} = await $host.get('api/reviewText', {params: {
        page: page, limit: limit
    }});
    return data;
}
export const fetchOneTextReview = async(id) => {
    const {data} = await $host.get('api/reviewText/' + id);
    return data;
}
