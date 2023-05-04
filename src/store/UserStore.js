import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAdmin = false
        this._isWorker = false
        this._isAuth = true
        this._isUser = false
        this._user = []
        this._orders = [
            {date: 1676847888, number: "1N30325", products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 44000, status: "delivered"},
            {date: 1676847878, number: "1N30325", products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}], orderSum: 2000, status: "handling"},
            {date: 1676847856, number: "1N30325", products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 4000, status: "paid"},
        ]
        makeAutoObservable(this)
    }
    get ordersSum() {
        return this.calcSum();
    }
    calcSum() {
        let temp = this._orders.reduce((sum, item) => sum = sum + +item.orderSum, 0);
        return temp;
    }
    
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setIsAdmin(bool) {
        this._isAdmin = bool
    }
    setIsWorker(bool) {
        this._isWorker = bool
    }
    setIsUser(bool) {
        this._isUser = bool
    }
    setUser(user) {
        this._user = user
    }
    
    get isAdmin() {
        return this._isAdmin
    }
    get isWorker() {
        return this._isWorker
    }
    get isUser() {
        return this._isUser
    }
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get orders() {
        return this._orders
    }
    get promotion() {
        return this._promotion
    }

}