
const requestPromise = require('request-promise');
const request = require('request');

const timeout = 1500;
const errorTimeout = 5000;

const resources = function(url){
    return function (id) {
        const urls = {
            azione: url +"/smartlightbackend/smartlight/lightbulb/{0}/action".replace("{0}",id),
            status: url +"/smartlightbackend/smartlight/lightbulb/{0}/status".replace("{0}",id),
            info:   url +"/smartlight/lightbulb/{0}/info".replace("{0}",id)
        };
        console.log(url);
        return urls;
    }
};

var urls = resources("http://192.168.43.1:8084");

var BACKEND1 = "http://192.168.43.134:8084";
var BACKEND2 = "http://192.168.43.134:8084";

var urls = resources("http://192.168.43.134:8084");
var errorOpen = true;

function requestManager(error, response, body,callback,errCallback){
    if (response && response.statusCode != 200) {
        // error
    }
    if (error) {
        console.log("errore");

        errCallback();
        if (errorOpen) {
            alert(error);
            errorOpen = false;
            setTimeout(()=>{errorOpen=true},errorTimeout);
        }
    } else {

        if (callback){callback(JSON.parse(body))};
    }
}

module.exports = {
    setBackend:function(backend){
        if (backend==1) {
            this.url(BACKEND1)
        } else {
            this.url(BACKEND2)
        }
    },
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
    status: function (id,callback,errCallback) {
        return request({
            url: urls(id).status,
            method: 'GET',
            timeout:timeout
        }, function(error, response, body){
            console.log("Status:" +body);

            requestManager(error,response,body,callback,errCallback);
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
            requestManager(error,response,body,callback);
        });
    }
};

