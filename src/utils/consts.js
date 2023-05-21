import jwtDecode from "jwt-decode";

export const ADMIN_ROUTE = '/admin';
export const WORKER_ROUTE = '/worker';
export const AUTH_ROUTE = '/auth';
export const SHOP_ROUTE = '/';
export const BASKET_ROUTE = '/basket';
export const PRODUCT_ROUTE = '/product';
export const CONTACTS_ROUTE = '/contacts';
export const ERROR_ROUTE = '/error';
export const ORDERING_ROUTE = '/ordering';
export const CABINET_ROUTE = '/cabinet';
export const PROMOTIONS_ROUTE = '/promotions';
export const QUESTIONS_ROUTE = '/questions';
export const REVIEWS_ROUTE = '/reviews';
export const userId = () => {
    const token = localStorage.getItem('token');
    const jwtInfo = jwtDecode(token);
    return jwtInfo.id
}
export const isAuth = () => {
    const token = localStorage.getItem('token');
    if(token) {
        return true;
    }
    return false;
}