const axios = require('axios')


export class API {

    constructor(url){
        this.url = url;
    }

     calls(name){
        var resourceUrl = `${this.url}/${name}`;
        var call = {};

        /* call.accendi = ({id}, params={}) => axios.post(`${resourceUrl}/{0}/accendi`.format(id),params);
         call.spegni = ({id}, params={}) => axios.post(`${resourceUrl}/{0}/spegni`.format(id),params);
         call.getStatus = ({id}) => axios.get(`${resourceUrl}/{0}/status`.format(id));
         call.getInfo = ({id}) => axios.get(`${resourceUrl}`.format(id)); */

         call.accendi = (id, params={}) => axios.post(`${resourceUrl}/accendi/{0}`.replace("{0}",id),params);
         call.spegni = (id, params={}) => axios.post(`${resourceUrl}/spegni/{0}`.replace("{0}",id),params);
         call.getStatus = (id) => axios.get(`${resourceUrl}/ottieniStatus/{0}`.replace("{0}",id).format(id));
         call.getInfo = (id) => axios.get(`${resourceUrl}/ottieniInformazioni/{0}`.replace("{0}",id));

        return call;
    }
}