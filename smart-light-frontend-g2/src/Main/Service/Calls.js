
const requestPromise = require('request-promise');
const request = require('request');


const timeout = 1500;

const resources = function(url){
    return function (id) {
        const urls = {
            azione: url +"/smartlighgt/lightbulb/{0}/action".replace("{0}",id),
            accendi:url +"/smartlighgt/lightbulb/accendi/{0}".replace("{0}",id),
            spegni: url +"/smartlighgt/lightbulb/spegni/{0}".replace("{0}",id),
            status: url +"/smartlighgt/lightbulb/{0}/status/".replace("{0}",id),
            info:   url +"/smartlighgt/lightbulb/ottieniInformazioni/{0}".replace("{0}",id)
        };
        console.log(url);
        return urls;
    }
};

var urls = resources("http://localhost:8085");

function requestManager(error, response){
    if (response && response.statusCode != 200) {
        // error
    }
    if (error) {
        console.log("errore");
    }
}

module.exports = {
    url: function(url){
        urls = resources(url);
    },
    azione: function(id,json) {
        return requestPromise({
            url: urls(id).azione,
            method: 'POST',
            json: json,
            timeout:timeout
        }, function(error, response, body){
            console.log(body);
            requestManager(error,response);
        });
    },
    accendi: function(id,json) {
        return requestPromise({
            url: urls(id).accendi,
            method: 'POST',
            json: json,
            timeout:timeout
        }, function(error, response, body){
            console.log(body);
            requestManager(error,response);
        });
    },
    spegni: function (id,json) {
        return requestPromise({
            url: urls(id).spegni,
            method: 'POST',
            json: json,
            timeout:timeout
        }, function(error, response, body){
            console.log(body);
            requestManager(error,response);
        });
    },
    status: function (id,callback) {
        return request({
            url: urls(id).status,
            method: 'GET',
            timeout:timeout
        }, function(error, response, body){
            console.log(body);
            callback(body);
            requestManager(error,response);
        });
    },
    info: function (id,callback) {
        return request({
            url: urls(id).info,
            method: 'GET',
            timeout:timeout
        }, function(error, response, body){
            console.log(body);
            callback(body);
            requestManager(error,response);
        });
    }
};


