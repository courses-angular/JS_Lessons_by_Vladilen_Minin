class SimpleMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandardMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class MemberFactory {
    static List = {
        simple: SimpleMemberShip,
        standard: StandardMemberShip,
        premium: PremiumMemberShip
    }

    create(name, type = 'simple') {
        const MemberShip = MemberFactory.List[type] || MemberFactory.List.simple;
        const member = new MemberShip(name);
        member.type = type;
        member.define = function () {
            console.log(`${this.name} ${this.type}:  ${this.cost}`)
        }
        return member;
    }
}
const factory = new MemberFactory();
const members = [
    factory.create('Yevgeny','simple'),
    factory.create('Igor','premium'),
    factory.create('Alex','standard'),
    factory.create('Marina')
];

console.log(members)
members.forEach((member)=>{
    member.define()
})
