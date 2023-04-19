import { ADMIN_ROUTE, BASKET_ROUTE, CABINET_ROUTE, CONTACTS_ROUTE, ERROR_ROUTE, ORDERING_ROUTE, PRODUCT_ROUTE, PROMOTIONS_ROUTE, QUESTIONS_ROUTE, AUTH_ROUTE, REVIEWS_ROUTE, SHOP_ROUTE, WORKER_ROUTE } from "./utils/consts";
import Admin from "./pages/admin/Admin";
import Worker from "./pages/worker/Worker";
import Ordering from "./pages/ordering/Ordering";
import Auth from "./pages/auth/Auth";
import Basket from "./pages/basket/Basket";
import Cabinet from "./pages/cabinet/Cabinet";
import Contacts from "./pages/contacts/Contacts";
import ErrorPage from "./pages/errorPage/ErrorPage";
import ProductPage from "./pages/productPage/ProductPage";
import Promotions from "./pages/promotions/Promotions";
import Questions from "./pages/questions/Questions";
import Reviews from "./pages/reviews/Reviews";
import Shop from "./pages/shop/Shop";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: WORKER_ROUTE,
        Component: Worker
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: ORDERING_ROUTE,
        Component: Ordering
    },
    {
        path: CABINET_ROUTE,
        Component: Cabinet
    },
];
export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage 
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: ERROR_ROUTE,
        Component: ErrorPage
    },
    {
        path: PROMOTIONS_ROUTE,
        Component: Promotions
    },
    {
        path: QUESTIONS_ROUTE,
        Component: Questions
    },
    {
        path: REVIEWS_ROUTE,
        Component: Reviews
    },
];