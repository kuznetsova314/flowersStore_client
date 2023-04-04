import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._isFlowers = true
        this._size = []
        this._bouquets = [
            {id: 1, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{name: "Малый", value: 1290}, {name: "Средний", value: 1550}, {name: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847878, rating: 1},
            {id: 2, name: "Букет из разноцветных роз", price: [{name: "Малый", value: 129}, {name: "Средний", value: 155}, {name: "Большой", value: 180}], size: 'big', flowers: ["roses", "tulips"], pack: 'p_bouquet', color: 'c_red', tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847870, rating: 2},
            {id: 3, name: "Букет из разноцветных пионов", price: [{name: "Малый", value: 2500}, {name: "Средний", value: 3500}, {name: "Большой", value: 1900}], size: 'small', flowers: [ "roses", "tulips"], pack: 'p_bouquet', color: 'c_blue', tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847860, rating: 3},
            {id: 4, name: "Букет из разноцветных роз", price: [{name: "Малый", value: 4600}, {name: "Средний", value: 1540}, {name: "Большой", value: 1799}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_basket', color: 'c_red', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847850, rating: 4},
            {id: 5, name: "Букет из разноцветных роз", price: [{name: "Малый", value: 2700}, {name: "Средний", value: 1550}, {name: "Большой", value: 1900}], size: 'small', flowers: [ "roses"], pack: 'p_basket', color: 'c_yellow', tag: 'Акция', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847834, rating: 5},
            {id: 6, name: "Букет из разноцветных пионов", price: [{name: "Малый", value: 990}, {name: "Средний", value: 1540}, {name: "Большой", value: 1800}], size: 'small', flowers: [ "roses", "tulips"], pack: 'p_bouquet', color: 'c_blue', tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847860, rating: 3},
            {id: 7, name: "Букет из разноцветных роз", price: [{name: "Малый", value: 6000}, {name: "Средний", value: 1550}, {name: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_basket', color: 'c_red', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847850, rating: 4},
            {id: 8, name: "Букет из разноцветных роз", price: [{name: "Малый", value: 7000}, {name: "Средний", value: 1550}, {name: "Большой", value: 1800}], size: 'small', flowers: [ "roses"], pack: 'p_basket', color: 'c_yellow', tag: 'Акция', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847834, rating: 5},
            {id: 9, name: "Букет из разноцветных пионов",price: [{name: "Малый", value: 2300}, {name: "Средний", value: 1550}, {name: "Большой", value: 1800}], size: 'small', flowers: [ "roses", "tulips"], pack: 'p_bouquet', color: 'c_blue', tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847860, rating: 3},
            {id: 10, name: "Букет из разноцветных роз", price: [{name: "Малый", value: 4500}, {name: "Средний", value: 1550}, {name: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_basket', color: 'c_red', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847850, rating: 4},
            {id: 11, name: "Букет из разноцветных роз", price: [{name: "Малый", value: 1254}, {name: "Средний", value: 1550}, {name: "Большой", value: 1800}], size: 'small', flowers: [ "roses"], pack: 'p_basket', color: 'c_yellow', tag: 'Акция', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847834, rating: 5},
        ]
        this._flowers = [
            {id: 1, name: "Розами", value: "roses"},
            {id: 2, name: "Тюльпанами", value: "tulips"},
            {id: 3, name: "Гортензиями", value: "hydrangea"},
            {id: 4, name: "Орхидеями", value: "orchid"},
            {id: 5, name: "Ирисами", value: "iris"},
            {id: 6, name: "Лилиями", value: "lily"},
            {id: 7, name: "Герберами", value: "gerbera"},
            {id: 8, name: "Пионами", value: "peonies"},
            {id: 9, name: "Ромашками", value: "chamomile"},
            {id: 10, name: "Васильками", value: "cornflower"},
            {id: 11, name: "Незабудками", value: "forget_me_not"},
            {id: 12, name: "Харизантемами", value: "chrysanthemum"},
        ]
        this._pack = [
            {id: 1, name: "Букетом", value: "p_bouquet"},
            {id: 2, name: "В корзине", value: "p_basket"},
            {id: 3, name: "В коробке", value: "p_box"},
        ]
        this._color = [
            {id: 1, name: "Белая", value: "c_white"},
            {id: 2, name: "Розовая", value: "c_rose"},
            {id: 3, name: "Красная", value: "c_red"},
            {id: 4, name: "Желтая", value: "c_yellow"},
            {id: 5, name: "Оранжевая", value: "c_orange"},
            {id: 6, name: "Бордовая", value: "c_burgundy"},
            {id: 7, name: "Синяя", value: "c_blue"},
            {id: 8, name: "Фиолетовая", value: "c_purple"},
        ]
        this._currency = [
            {id: 1, name: 'RUB'},
            {id: 2, name: 'USD'}
        ]
        this._sorting = [
            {id: 1, name: "Новизне"},
            {id: 2, name: "Цена по возрастанию"},
            {id: 3, name: "Цена по убыванию"},
            {id: 4, name: "Популярности"},
        ]
        this._selectedCurrency = {}
        this._products = [
            {id: 201, name: "Шок. конфеты 'Лучшей маме'", price: 23000, img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847878, rating: 1},
            {id: 202, name: "Шок. конфеты 'Лучшей маме'", price: 6000, tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847870, rating: 2},
            {id: 203, name: "Шок. конфеты 'Лучшей маме'", price: 2300, tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847860, rating: 3},
            {id: 204, name: "Шок. конфеты 'Лучшей маме'", price: 230, img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847850, rating: 4},
            {id: 205, name: "Шок. конфеты 'Лучшей маме'", price: 4000, tag: 'Акция', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847834, rating: 5},
            {id: 206, name: "Шок. конфеты 'Лучшей маме'", price: 2300, tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847860, rating: 3},
            {id: 207, name: "Шок. конфеты 'Лучшей маме'", price: 230, img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847850, rating: 4},
            {id: 208, name: "Шок. конфеты 'Лучшей маме'", price: 4000, tag: 'Акция', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847834, rating: 5},
        ]
        makeAutoObservable(this)
    }
    setIsFlowers(bool) {
        this._isFlowers = bool
    }
    setSize(size) {
        this._size = size
    }
    setBouquets(bouquets) {
        this._bouquets = bouquets
    }
    setFlowers(flowers) {
        this._flowers = flowers
    }
    setPack(pack) {
        this._pack = pack
    }
    setColor(color) {
        this._color = color
    }
    setCurrency(currency) {
        this._currecy = currency
    }
    setSelectedCurrency(cur) {
        this._selectedCurrency = cur
    }
    setProducts(products) {
        this._products = products
    }
    
    get isFlowers() {
        return this._isFlowers
    }
    get size() {
        return this._size
    }
    get bouquets() {
        return this._bouquets
    }
    get flowers() {
        return this._flowers
    }
    get pack() {
        return this._pack
    }
    get color() {
        return this._color
    }
    get priceRange() {
        return this._priceRange
    }
    get currency() {
        return this._currency
    }
    get sorting() {
        return this._sorting
    }
    get selectedCurrency() {
        return this._selectedCurrency
    }
    get products() {
        return this._products
    }
    
}