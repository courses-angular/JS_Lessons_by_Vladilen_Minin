// Work nice for chats
class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }
    sendMessage(message,to){
        this.room.send(message,this,to)
    }
    recieveMessage(message,from){
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}
class ChatRoom {
    constructor() {
        this.users = {}
    }
    register(user){
        this.users[user.name] = user;
        user.room = this;
    }
    send(message,fromUser,toUser){
        if(toUser){
            toUser.recieveMessage(message,fromUser)
        }else{
            Object.keys(this.users).forEach((key)=>{
              if(this.users[key] !== fromUser){
                 this.users[key].recieveMessage(message,fromUser)
              }
            })
        }
    }
}
const igor = new User('Igor');
const lena = new User('Lena');
const alex = new User('Alex');
const room = new ChatRoom();
room.register(igor)
room.register(lena)
room.register(alex)

igor.sendMessage('Hello',lena);
lena.sendMessage('Hello Alex',alex);
alex.sendMessage('Hello everyone');
