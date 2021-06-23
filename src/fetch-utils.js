import request from 'superagent';

const URL = 'https://vast-springs-03582.herokuapp.com';

export async function getAllOwls() {
    const data = await request.get(`${URL}/owls/`);

    return data.body;
}

export async function getOneOwl(id) {
    const data = await request.get(`${URL}/owls/${id}`);

    return data.body;
}

export async function updateOwl(owlData, id) {
    const data = await request
        .put(`${URL}/owls/${id}`)
        .send(owlData);

    return data.body;
}

export async function createOwl(owlData) {
    const data = await request
        .post(`${URL}/owls/`)
        .send(owlData);

    return data.body;
}

export async function getAllEndangered() {
    const data = await request.get(`${URL}/endangered`);

    return data.body;
}

export async function deleteOwl(id) {
    const data = await request.get(`${URL}/owls/${id}`);

    return data.body;
}