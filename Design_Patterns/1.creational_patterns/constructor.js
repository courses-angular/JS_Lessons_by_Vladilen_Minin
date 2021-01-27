// ES 5

function Server(name,ip) {
    this.name = name;
    this.ip = ip;
}
Server.prototype.getUrl = function () {
    return `https://${this.ip}:8080`
}
const server = new Server('aws','127.0.0.0');
console.log(server.getUrl());


class ServerAWS{
    constructor(name,ip) {
        this.name = name;
        this.ip = ip;
    }
    getUrl(){
        return `https://${this.ip}:8080`
    }
}
const serverAWS = new Server('aws','127.0.0.0');
console.log(serverAWS.getUrl());
