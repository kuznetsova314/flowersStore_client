import { makeAutoObservable } from "mobx";

export default class BasketStore {
    constructor() {
        this._products = [
            {
                product: {id: 1, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847878, rating: 1},
                price: {size: "Малый", value: 1290},
                count: 1
            },
            {
                product: {id: 2, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847878, rating: 1},
                price: {size: "Малый", value: 190},
                count: 2
            },
            {
                product: {id: 3, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847878, rating: 1},
                price: {size: "Малый", value: 129},
                count: 3
            },

        ]
        makeAutoObservable(this)
    }
    get sum() {
        return this.calcSum()
    }
    calcSum() {
        let temp = this._products.reduce((sum, item) => sum + item.price.value * item.count, 0);
        return temp;
    }
    setProducts(products) {
        this._products = products
    }
    get products() {
        return this._products
    }
}