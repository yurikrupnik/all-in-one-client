import request from 'axios';
import { url, infoUrl, provider } from './config';

// class Api {
//     constructor(p, u) {
//         this.provider = p;
//         this.url = u;
//         this.infoUrl = infoUrl;
//         this.request = request;
//     }
//
//     fetch(query) {
//         const params = {
//             params: {
//                 q: query
//             }
//         };
//         return this.request.get(`${this.url}`, params)
//             .then(res => res.data)
//             .catch(err => {
//                 console.log('err', err);
//             });
//     }
//
//     getSelected(id) {
//         return this.request.get(`${this.infoUrl}/${id}`, { params: { embed: 'cast' } })
//             .then(res => res.data)
//             .catch(err => {
//                 console.log('err', err);
//             });
//     }
// }

const api = {
    provider() {
        return provider;
    },
    fetch(query) {
        const params = {
            params: {
                q: query
            }
        };
        return request.get(`${url}`, params)
            .then(res => res.data)
            .catch((err) => {
                console.log('err', err);
            });
    },
    getSelected(id) {
        return request.get(`${infoUrl}/${id}`, { params: { embed: 'cast' } })
            .then(res => res.data)
            .catch((err) => {
                console.log('err', err);
            });
    }
};

// export default new Api(provider, url);
export default api;
