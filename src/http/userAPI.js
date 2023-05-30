import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (phone, password, fullName, city, address) => {
    const {data} = await $host.post('api/user/registration', {phone, password, fullName, city, address});
    localStorage.setItem('token', data.token);
    const jwtInfo = jwtDecode(data.token);
    const userInfo = {
        address: data.address, 
        city: data.city, 
        fullName: data.fullName, 
        promotion: data.promotion, 
        phone: jwtInfo.phone, 
        role: jwtInfo.role
    }
    return userInfo;
}
export const login = async (phone, password) => {
    const {data} = await $host.post('api/user/login', {phone, password});
    localStorage.setItem('token', data.token);
    const jwtInfo = jwtDecode(data.token);
    const userInfo = {
        id: data.id, 
        address: data.address, 
        city: data.city, 
        fullName: data.fullName, 
        promotion: data.promotion, 
        phone: jwtInfo.phone, 
        role: jwtInfo.role
    }
    console.log(userInfo)
    return userInfo;
}
export const check = async () => {
    const {data} = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    const jwtInfo = jwtDecode(data.token);
    const userInfo = {
        id: data.id, 
        address: data.address, 
        city: data.city, 
        fullName: data.fullName, 
        promotion: data.promotion, 
        phone: jwtInfo.phone, 
        role: jwtInfo.role
    }
    return userInfo;
}
export const changePassword = async({phone, oldPassword, newPassword}) => {
    const {data} = await $authHost.post('api/user/changePassword', {phone, oldPassword, newPassword});
    return data;
}
export const changeInfo = async(newUser) => {
    console.log(newUser)
    const {data} = await $authHost.post('api/user/changeInfo', newUser);
    localStorage.setItem('token', data.token);
    const jwtInfo = jwtDecode(data.token);
    const userInfo = {
        id: data.id, 
        address: data.address, 
        city: data.city, 
        fullName: data.fullName, 
        promotion: data.promotion, 
        phone: jwtInfo.phone, 
        role: jwtInfo.role
    }
    return userInfo;
}