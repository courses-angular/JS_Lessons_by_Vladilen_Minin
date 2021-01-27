class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port
    }

    get url() {
        return `http://${this.ip}: ${this.port}`
    }
}
// Decorator get instance of Class and return the instance of the same Class
function aws(server) {
    server.isAws = true;
    server.awsInfo = function () {
        return server.url
    }
    return server;
}
function azure(server) {
    server.isAzure = true;
    server.port += 500
    server.azureInfo = function () {
        return `Azure is running at ${server.ip} and port ${server.port}`
    }
    return server
}
const server1 = aws(new Server('127.0.0.0',8080));
console.log('Aws server decorator:',server1.awsInfo());
const server2 = azure(new Server('82.122.20.22',3000));
console.log('Azure server decorator:',server2.azureInfo());
