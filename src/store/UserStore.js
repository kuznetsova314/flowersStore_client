import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAdmin = true
        this._isWorker = false
        this._isAuth = true
        this._isUser = false
        this._user = {}
        makeAutoObservable(this)
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
}