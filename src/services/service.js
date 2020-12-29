import api from './api';

const BaseService = {
    async getAll(url, params = {}) {
        return await api.get(url, {
            params: params
        });
    },

    async getOne(url, id) {
        return await api.get(`${url}/${id}`);
    }
}

export default BaseService;