class Database{
    constructor(data) {
        if(Database.isExists){
            return Database.instance
        }
        Database.instance = this;
        Database.isExists = true;
        this.data = data
    }
    getData(){
        return this.data
    }
}
const mongo = new Database('MongoDb');
console.log(mongo.getData());
const mySQL = new Database('MySQL'); //show just instance of MongoDB
console.log(mySQL.getData());
