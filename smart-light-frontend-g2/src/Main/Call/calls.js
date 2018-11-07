const axios = require('axios')

class API {

    constructor({ url }){
        this.url = url
        this.endpoints = {}
    }
    /**
     * Create and store a single entity's endpoints
     * @param {A entity Object} entity
     */
    createEntity(entity) {
        this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity)
    }

    createEntities(arrayOfEntity) {
        arrayOfEntity.forEach(this.createEntity.bind(this))
    }
    /**
     * Create the basic endpoints handlers for CRUD operations
     * @param {A entity Object} entity
     */
    createBasicCRUDEndpoints( { name } ) {
        var endpoints = {};

        const resourceURL = `${this.url}/${name}`;

        endpoints.accendi = ({ id }, params, config={}) =>  axios.post(`${resourceURL}/${id}`, params, config);
        endpoints.spegni = ({ id }, params, config={}) =>  axios.post(`${resourceURL}/${id}`, params, config);
        endpoints.getStatus = ({ query={}}, config={} ) => axios.get(`${resourceURL}/${id}`, Object.assign({ params: { query }, config }));
        endpoints.getInfo = ({ query={}}, config={} ) => axios.get(`${resourceURL}/${id}`, Object.assign({ params: { query }, config }));

        return endpoints

    }

}

export default API