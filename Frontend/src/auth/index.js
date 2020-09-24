import { API } from '../config';
//const axios = require("axios");

export const signup = user => {
    return fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })  
        .catch(err => {
            console.log(err);
        });
};

export const signin = user => {
    return fetch(`${API}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {//if have window object save in local storage
        localStorage.setItem('jwt', JSON.stringify(data));//js to json string
        next();//redirecting, clearing etc.
    }
};

export const signout = next => {
    if (typeof window !== 'undefined') {//check if have local storage
        localStorage.removeItem('jwt');
        next();//remove from local storage and give request to backend
        return fetch(`${API}/signout`, {
            method: 'GET'
        })
            .then(response => {
                console.log('signout', response);
            })
            .catch(err => console.log(err));
    }
};

export const isAuthenticated = () => {//for link hiding...if user is log in hide sign in sign out otherwise hide signout and show sign in sign out
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));//to retrieve and return in json format
    } else {
        return false;
    }
};