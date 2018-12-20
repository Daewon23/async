const fetch = require('node-fetch');
const url = 'https://jsonplaceholder.typicode.com';



async function getUser(id) {
    try {

        let response = await fetch(`${url}/users/${id}`)
        let data = await response.json();
        return data;

    } catch (error) {
        console.error(error)
    }
}

async function getEmail(id) {
    try {
        let response = await fetch(`${url}/users/${id}`)
        let data = await response.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}

async function getComments(id) {
    try {
        let response = await fetch(`${url}/comments/${id}`);
        let data = response.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}

async function getAddrres(id) {
    try {
        let response = await fetch(`${url}/users/${id}`)
        let data = response.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}


async function main() {
    try {
        let comments = await getComments(1);
        let user = await getUser(1);
        let mail = await getEmail(1);
        let address = await getAddrres(1);
        console.log(user.name);
        console.log(user.email);
        console.log(user.address.street + user.address.city);
        console.log(comments.body);
    } catch (error) {
        console.error(error);
    }
}

main();